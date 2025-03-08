# Sacred Tobacco Interactive Map

This repo contains the code for the Sacred Tobacco Interactive Map. The map is built with Eleventy, uses Tailwind CSS for styling, and features interactive elements powered by Alpine.js. It's hosted on Netlify and pulls seed location data from Contentful.

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

## Deploying to Production

1. Commit changes to the `main` branch.
2. Push to the `main` branch on GitHub.
3. Netlify will automatically build and deploy the changes.

## About Contentful

Contentful contains the locations sacred tobacco seeds were shared with others.

Contentful is configured to call a Netlify build hook when new content is published or unpublished.

## iframe Setup

The parent page should have this Javascript:

```js
<script>
window.addEventListener('message', function(event) {
    // Handle both message formats
    let height;
    if (typeof event.data === 'string' && event.data.startsWith('setHeight:')) {
        height = parseInt(event.data.split(':')[1]);
    } else if (event.data && event.data.height) {
        height = event.data.height;
    }
    
    if (height) {
        // Find the iframe - adjust the selector if needed
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            if (iframe.src.includes('asemaa')) {  // Adjust this to match part of your iframe URL
                iframe.style.height = height + 'px';
            }
        });
    }
});
</script>
```

And the iframe should be set up with:

```html
<iframe 
    src="https://asemaa.netlify.app/" 
    width="100%" 
    frameborder="0"
    scrolling="no"
    style="width: 100%; border: none; overflow: hidden;"
></iframe>
```
