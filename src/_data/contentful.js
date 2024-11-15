require('dotenv').config();
const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID, // Use environment variable
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN // Use environment variable
});

module.exports = client; 