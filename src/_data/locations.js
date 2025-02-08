// This file process the locations data from Contentful and returns 
// the locations in a sorted array.
const client = require('./contentful');

module.exports = async function () {
    const entries = await client.getEntries({
        content_type: 'seedLocation' // Replace with your content type ID
    });

    // Map marker types to their respective CSS classes
    const markerClasses = {
        Dot: "marker-dot",
        Diamond: "marker-diamond",
        Heart: "marker-heart" // Assuming you have a class for Heart
    };

    const locations = entries.items.map(item => {
        // Determine the marker type, defaulting to "Dot" if not specified
        const markerType = item.fields.typeOfMarker || "Dot";

        return {
            id: item.sys.id,
            name: item.fields.title,
            coordinates: { x: item.fields.fromLeft, y: item.fields.fromTop },
            markerType: markerType,
            imageUrl: item.fields.image?.fields?.file?.url || null,
            markerClass: markerClasses[markerType] // Use the mapped CSS class
        };
    });

    // Sort locations alphabetically by name
    const sortedLocations = locations.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return sortedLocations;
}; 