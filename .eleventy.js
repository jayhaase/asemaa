module.exports = function(eleventyConfig) {
    // Ensure images are copied over
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");

    return {
      dir: {
        input: "src",
        output: "_site",
        layouts: "_layouts"
      }
    };
  };
  