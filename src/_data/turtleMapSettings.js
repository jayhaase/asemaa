const client = require('./contentful');

module.exports = async function () {
    console.log('Fetching Turtle Map Settings...');
    
    const settingsEntries = await client.getEntries({
        content_type: 'turtleMapSettings',
        limit: 1
    });

    if (!settingsEntries.items.length) {
        console.log('No Turtle Map Settings found');
        return {
            defaultLocationId: null
        };
    }

    const settings = settingsEntries.items[0];
    console.log('Turtle Map Settings loaded');

    return {
        defaultLocationId: settings.fields.defaultLocation?.sys?.id || null
    };
}; 