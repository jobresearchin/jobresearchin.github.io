// eleventy.config.js

const Image = require("@11ty/eleventy-img");


async function imageShortcode(src, alt, sizes, width, height) {
  if(alt === undefined) {
    throw new Error(`Missing \`alt\` on image from: ${src}`);
  }

  const isSvg = src.toLowerCase().endsWith('.svg');

  let metadata = await Image(src, {
    
    widths: width ? [parseInt(width, 10)] : [300, 600, 900, 1200],
  
    formats: isSvg ? ['svg'] : ['webp', 'jpeg'],
    outputDir: "./_site/images/",
    urlPath: "/images/",
    
    svgShortCircuit: true
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // width/heightが指定されていればimgタグに属性を追加
  if (width) imageAttributes.width = parseInt(width, 10);
  if (height) imageAttributes.height = parseInt(height, 10);

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // (他の設定はそのまま)
  eleventyConfig.addGlobalData("translations", () => {
    return require("./translations.js");
  });
  
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("images"); 

  return {
    dir: {
      input: "."
    }
  };
};