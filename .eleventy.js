
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addPassthroughCopy("./src/assets/js");
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addWatchTarget("./src/assets/sass");

    // Date
    eleventyConfig.addFilter('dateDisplay', require('./src/filters/date-display.js'));
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Collections
    eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('src/blog/**/*.md').reverse();
    });

    return {
      dir: {
        input: "src",
        output: "public",
        includes: "includes"
      }
    }
  };