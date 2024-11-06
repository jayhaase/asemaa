const Image = require("@11ty/eleventy-img");
const path = require('path');

module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" });

  // Add image shortcode
  eleventyConfig.addAsyncShortcode("image", async function(src, alt, sizes = "100vw") {
    if (!src) {
      throw new Error(`Missing image source`);
    }

    if (!alt) {
      throw new Error(`Missing alt text for image: ${src}`);
    }

    // Convert /assets/images to just /images for processing
    const processPath = src.replace('/assets/images', '/images');
    
    // But use the full path for finding the source file
    const inputPath = path.join(
      __dirname,
      'src',
      src.startsWith('/') ? src.slice(1) : src
    );

    let metadata = await Image(inputPath, {
      widths: [300, 600, 900],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/images/",
      urlPath: "/images/",
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};