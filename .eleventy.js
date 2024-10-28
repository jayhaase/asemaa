const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Moving files
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css/styles.css");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts"
    },
  };
};