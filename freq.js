
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


function countWords(inputWords)
{
  return countedNames = inputWords.reduce(function (allWords, word) {
    if (word in allWords) {
      allWords[word]++;
    }
    else {
      allWords[word] = 1;
    }
    return allWords;
  }, {});
}
module.exports = countWords;


console.log("initial test case for use case ",countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']));
