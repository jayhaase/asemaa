# ChatGPT Prompt

Okay! Echo, would you help me with the visual design of a project I am working on?

Here is the tech stack so you know what I am working with:

- github
- Netlify
- 11ty
- Tailwind CSS
- HTML, CSS, JavaScript
- Nunjucks

Here is the project:

- Create a prototype microsite
- The site will be dedicated to Ojibwe Asemaa
- The site will show key points on a map were Asemaa seeds were traded
- The map will be an abstract map comprised of a large turtle symbolizing Turtle Island
- On the turtle's back will be overlayed a stylized map of North America
- The map of North America will have key points indicated by a theme-related icon/image
- Clicking on a key point will display more info about the point
- There will also be a list of the key points on the page
- The page will contain basic information about Asemaa

What do you recommend as the first step for you and I to collaborate on the visual design of the site?

## Color Pallete

### Deep Forest Green (#1B5E20)

1. Primary Backgrounds: This can be used for the site’s main background, footer, or header sections to create a deep, natural feel.
2. Turtle Icon Accents: Using this color within the Turtle iconography will reinforce the symbolic connection to land and nature.

### Clay Brown (#8D6E63)

1. Text or Subheadings: Clay brown can work well for subheadings or secondary text, balancing with the green for easy readability.
2. Key Points Icons: This color will make icons stand out without feeling too stark against the background.

### Soft Sky Blue (#81D4FA)

1. Accent and Buttons: Use this blue for interactive elements like buttons, links, or highlight effects for map interactions. It will add a refreshing, natural contrast.
2. Modals or Tooltips: Applying this blue as a background for pop-up elements will keep things light and engaging.

### Ochre/Muted Yellow (#FFD54F)

1. Highlight and Emphasis: This color can be used sparingly for key callouts or section dividers to draw attention where needed.
2. Map Pointers: A subtle ochre on the Turtle map for pointers would add a warm contrast without overpowering.

## Typography

## Typography Guide

### 1. Header Font: Traditional Serif or Rustic Sans-serif

- **Font Options**:
  - [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) – Elegant, organic serif.
  - [Merriweather](https://fonts.google.com/specimen/Merriweather) – A classic, readable serif.
  - [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) – Open and traditional serif.
  - [Nunito](https://fonts.google.com/specimen/Nunito) – Rounded sans-serif, friendly and approachable.
- **Usage**:
  - Apply this font to page titles, section headers, and key terms related to Asemaa for visual emphasis.
  
### 2. Body Font: Clean, Readable Sans-serif

- **Font Options**:
  - [Lato](https://fonts.google.com/specimen/Lato), [Roboto](https://fonts.google.com/specimen/Roboto), or [Open Sans](https://fonts.google.com/specimen/Open+Sans) – Versatile and clean sans-serifs.
  - [Noto Sans](https://fonts.google.com/specimen/Noto+Sans) – Good for readability and multilingual support.
- **Usage**:
  - Use for main body text to ensure readability, especially for detailed descriptions.

### 3. Accent or Decorative Font (Optional)

- **Font Options** (for special emphasis):
  - [Pacifico](https://fonts.google.com/specimen/Pacifico) or [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) – Great for a handwritten or brush style.
- **Usage**:
  - Consider using this sparingly for map titles or key point names for a touch of personality.

---

## Tailwind CSS Font Configuration

### Tailwind Font Classes

Define your fonts in the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        header: ['Playfair Display', 'serif'],
        body: ['Roboto', 'sans-serif'],
        accent: ['Pacifico', 'cursive'],
      },
    },
  },
};
```

#### Tailwind Font Application

- Headers: Apply font-header with size classes like `font-header text-2xl font-bold`.
- Body Text: Use `font-body text-base` for main content.
- Accent Text: Apply `font-accent` for decorative text where appropriate.
