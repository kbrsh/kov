# Kov
Markov chains made simple


## Usage

```js
var kov = require("kov");

var opts = {
  type: "sentence",
  min: 5,
  max: 10
}

// Put an array of sentences
var data = [];

console.log(kov(data, opts))
```

## API

- **type** - Takes two types: `sentence`, and  `word`. This is the array type of data given (array of sentences or array of words), and the type of output given (sentence or word);
- **min** - Takes an `integer`, the minimum required number of words/characters
- **max** - Takes an `integer`, the maximum number of words/characters in generated text
