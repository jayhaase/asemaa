# Sacred Tobacco Interactive Map

This repo contains the code for the Sacred Tobacco Interactive Map. The map is built with Eleventy, uses Tailwind CSS for styling, and features interactive elements powered by Alpine.js. It's hosted on Netlify and pulls data from Contentful.

It is expected to be an iframe on the Tobacco First website.

Here is the list of technologies used:

- Eleventy
- HTML, CSS, JavaScript
- Tailwind CSS
- Nunjucks
- npm
- Alpine.js
- Netlify
- Contentful
- GitHub

## Local Development

1. Clone the repo.

    ```bash
    git clone git@github.com:jayhaase/asemaa.git
    cd asemaa
    ```

2. Install dependencies.

    ```bash
    npm install
    ```

3. Create your environment variables file.

    ```bash
    cp .env.example .env
    ```

4. Update the `.env` file with the Contentful space ID and access token.

5. Start development server:

    ```bash
    npm run start
    ```

6. View at <http://localhost:8080>

## Building for Production

1. Commit changes to the `main` branch.
2. Push to the `main` branch on GitHub.
3. Netlify will automatically build and deploy the changes.

## About Contentful

Contentful contains the locations sacred tobacco seeds were shared with others.

Contentful is configured to call a Netlify build hook when new content is published.
