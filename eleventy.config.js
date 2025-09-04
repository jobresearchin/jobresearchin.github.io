module.exports = function (eleventyConfig) {
  // Add the translations data
  eleventyConfig.addGlobalData("translations", () => {
    return require("./translations.js");
  });

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      input: "."
    }
  };
};