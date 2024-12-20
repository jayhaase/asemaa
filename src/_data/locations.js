// This file process the locations data from Contentful and returns 
// the locations in a sorted array.
const client = require('./contentful');

module.exports = async function () {
    const entries = await client.getEntries({
        content_type: 'seedLocation' // Replace with your content type ID
    });

    const locations = entries.items.map(item => ({
        id: item.sys.id,
        name: item.fields.title,
        coordinates: { x: item.fields.fromLeft, y: item.fields.fromTop },
        imageUrl: item.fields.image?.fields?.file?.url || null // Add optional chaining and fallback
    }));

    // Sort locations alphabetically by name
    const sortedLocations = locations.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return sortedLocations;
}; 