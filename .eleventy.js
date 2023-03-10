const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addWatchTarget("src/assets/sass");

    eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

    // Date
    eleventyConfig.addFilter('dateDisplay', require('./src/filters/date-display.js'));
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Collections blog
    eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/**/*.md').reverse();
    });

    // Collections portfolio
    eleventyConfig.addCollection('works', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/realizacje/**/*.md').reverse();
    });

    return {
      dir: {
        input: "src",
        output: "public",
        includes: "includes"
      }
    }
  };