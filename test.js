var kov = require("./index.js");

setInterval(function() {
  console.log(kov(["hello", "hi"], {type:"sentence"}));
}, 1000);
