var sentence = require("./src/sentence.js");
var word = require("./src/word.js");
module.exports = function(data, opts) {

  if(opts.type.toLowerCase() === "sentence") {
    return sentence(data, opts);
  } else if(opts.type.toLowerCase() === "word") {
    return word(data, opts);
  } else {
    return "ERR: Invalid type of Markov Chain"
  }
}
