var kov = require("./index.js");

var opts = {
  type: "sentence"
}

var data = ["Hello World, I like Pie", "Hello dude, how are you?"];
console.log(kov(data, opts))
