const contractions = require("retext-contractions");
const diacritics = require("retext-diacritics");
const english = require("retext-english");
const equality = require("retext-equality");
const indefiniteArticle = require("retext-indefinite-article");
// const intensify = require("retext-intensify");
const passive = require("retext-passive");
const profanities = require("retext-profanities");
const quotes = require("retext-quotes");
// const readability = require("retext-readability");
const redundantAcronyms = require("retext-redundant-acronyms");
const repeatedWords = require("retext-repeated-words");
const spacing = require("retext-sentence-spacing");
// const simplify = require("retext-simplify");
const mentions = require("retext-syntax-mentions");
const urls = require("retext-syntax-urls");
const unified = require("unified");

const processor = unified()
  .use(english)
  .use(mentions)
  .use(urls)
  .use(equality)
  // .use(intensify)
  .use(passive)
  .use(profanities)
  // .use(readability)
  // .use(simplify)
  .use(contractions)
  .use(diacritics)
  .use(indefiniteArticle)
  .use(quotes)
  .use(redundantAcronyms)
  .use(repeatedWords)
  .use(spacing);

module.exports = processor;
