// This file process the locations data from Contentful and returns 
// the locations in a sorted array.
const client = require('./contentful');

module.exports = async function () {
    console.log('Starting to fetch entries from Contentful...');
    console.log('Using space ID:', process.env.CONTENTFUL_SPACE_ID);
    console.log('Access token length:', process.env.CONTENTFUL_ACCESS_TOKEN?.length);

    const entries = await client.getEntries({
        content_type: 'seedLocation'
    });

    console.log('Received entries from Contentful');
    console.log('Total entries:', entries.total);

    // Map marker types to their respective CSS classes
    const markerClasses = {
        Dot: "marker-dot",
        Diamond: "marker-diamond",
        Heart: "marker-heart",
        Leaf: "marker-leaf"
    };

    const locations = entries.items.map(item => {
        const markerType = item.fields.typeOfMarker || "Dot";
        console.log('Processed location:', item.fields.title);

        return {
            id: item.sys.id,
            name: item.fields.title,
            coordinates: { x: item.fields.fromLeft, y: item.fields.fromTop },
            markerType: markerType,
            imageUrl: item.fields.image?.fields?.file?.url || null,
            markerClass: markerClasses[markerType],
            description: item.fields.description || null,
            urlToAdditionalInformation: item.fields.urlToAdditionalInformation || null,
            youtubeVideoId: item.fields.youtubeVideoId || null
        };
    });

    // Sort locations alphabetically by name
    const sortedLocations = locations.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return sortedLocations;
}; 