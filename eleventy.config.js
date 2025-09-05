const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // Add the translations data
  eleventyConfig.addGlobalData("translations", () => {
    return require("./translations.js");
  });
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],
    widths: ["auto"],
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {}
    }
  });
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      input: "."
    }
  };
};