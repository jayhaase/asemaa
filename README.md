# Sacred Tobacco Interactive Map

This repo contains the code for the Sacred Tobacco Interactive Map. It uses the following technologies:

- Eleventy
- Contentful
- Netlify
- Tailwind CSS

## Local Development

1. Clone the repo.
2. Create a `.env` file and add your Contentful space ID and access token using the `.env.example` file as a template.
3. Run `npm install` to install the dependencies.
4. Run `npm run start` to start the local development server.

## Building for Production

1. Commit changes to the `main` branch.
2. Push to the `main` branch on GitHub.
3. Netlify will automatically build and deploy the changes.

## About Contentful

Contentful contains the locations sacred tobacco seeds were shared with others.

Contentful is configured to call a Netlify build hook when new content is published.
