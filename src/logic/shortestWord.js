import textToArray from "./textToArray";

const shortestWord = text => {
  const array = textToArray(text);
  const shortestWord = array.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, array[0]).length;

  // find
  return shortestWord;
};

export default shortestWord;
