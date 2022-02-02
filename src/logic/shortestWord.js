import textToArray from "./textToArray";

const shortestWord = text => {
  const digitsRemoved = text.replace(/[0-9]/g, "");
  // find the shortest word
  const array = textToArray(digitsRemoved);
  const shortestWord = array.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, array[0]).length;

  // find
  return shortestWord;
};

export default shortestWord;
