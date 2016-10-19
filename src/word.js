var sentence = [];
var map = {};
var starters = [];


for (var i = 0; i < data.length; i++) {
  var words = toChars(data[i]);
  starters.push(words[0]);
  for (var j = 0; j < words.length; j++) {
    if (map.hasOwnProperty(words[j])) {
      map[words[j]].push(words[j + 1]);
    } else {
      map[words[j]] = [words[j + 1]];
    }
  }
}

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function toWords(str) {
  return str.split(" ");
}

function toChars(str) {
	return str.split("");
}

module.exports.markovSentence(data, opts) {
  var word = randomElement(starters);
  sentence.push(word);

  while(map.hasOwnProperty(word)) {
    var lastWord = sentence[sentence.length - 1];
    word = randomElement(map[lastWord]);
    sentence.push(word);
    if (sentence.length > (opts.min) && sentence.length < (opts.max) && map[lastWord] === [null]) break;
  }

  return sentence.join("");
}
