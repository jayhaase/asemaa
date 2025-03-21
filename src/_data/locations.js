// This file process the locations data from Contentful and returns 
// the locations in a sorted array.
const client = require('./contentful');

module.exports = async function () {
    try {
        console.log('Starting to fetch entries from Contentful...');
        console.log('Using space ID:', process.env.CONTENTFUL_SPACE_ID);
        console.log('Access token length:', process.env.CONTENTFUL_ACCESS_TOKEN?.length);

        const entries = await client.getEntries({
            content_type: 'seedLocation',
            include: 2 // Include linked assets
        });

        console.log('Received entries from Contentful');
        console.log('Total entries:', entries.total);
        console.log('Items length:', entries.items?.length);

        if (!entries || !entries.items || entries.items.length === 0) {
            console.warn('No entries found in Contentful response');
            return [];
        }

        // Map marker types to their respective CSS classes
        const markerClasses = {
            Dot: "marker-dot",
            Diamond: "marker-diamond",
            Heart: "marker-heart"
        };

        console.log('Processing entries into locations...');
        const locations = entries.items.map(item => {
            // Determine the marker type, defaulting to "Dot" if not specified
            const markerType = item.fields.typeOfMarker || "Dot";
            
            const location = {
                id: item.sys.id,
                name: item.fields.title,
                coordinates: { x: item.fields.fromLeft, y: item.fields.fromTop },
                markerType: markerType,
                imageUrl: item.fields.image?.fields?.file?.url 
                    ? 'https:' + item.fields.image.fields.file.url 
                    : null,
                markerClass: markerClasses[markerType]
            };

            console.log('Processed location:', location.name);
            return location;
        });

        // Sort locations alphabetically by name
        const sortedLocations = locations.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

        console.log('Returning sorted locations, count:', sortedLocations.length);
        return sortedLocations;
    } catch (error) {
        console.error('Error fetching locations from Contentful:', error);
        // Log specific error details
        if (error.response) {
            console.error('Contentful API Error:', {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data
            });
        }
        throw error; // Re-throw the error to make the build fail if we can't get locations
    }
}; 