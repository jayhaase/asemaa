// For the Contentful client to work, you need to create a .env file in the root of the project
// based on the .env.example file and add your Contentful space ID and access token.
require('dotenv').config();
const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID, // Use environment variable
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN // Use environment variable
});

module.exports = client; 