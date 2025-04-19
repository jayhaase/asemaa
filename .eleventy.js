module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" });

  // Add async data handling
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(false);

  // Add debug logging
  eleventyConfig.on('eleventy.before', async () => {
    console.log('Starting Eleventy build...');
  });

  eleventyConfig.on('eleventy.after', async () => {
    console.log('Finished Eleventy build');
  });

  // Add data handling
  eleventyConfig.addGlobalData('locations', async () => {
    console.log('Fetching locations data...');
    const locations = require('./src/_data/locations');
    const data = await locations();
    console.log('Locations data fetched:', data.length, 'locations');
    return data;
  });

  // Add data handling for the locations array
  eleventyConfig.addGlobalData('locationsArray', async () => {
    const locations = require('./src/_data/locations');
    return await locations();
  });

  // Add data handling for turtle map settings
  eleventyConfig.addGlobalData('turtleMapSettings', async () => {
    console.log('Fetching turtle map settings...');
    const settings = require('./src/_data/turtleMapSettings');
    const data = await settings();
    console.log('Turtle map settings fetched:', data);
    return data;
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