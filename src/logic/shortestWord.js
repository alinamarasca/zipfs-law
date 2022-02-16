import textToArray from "./textToArray";

const shortestWord = text => {
  const array = textToArray(text);
  const length = array.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, array[0]).length;
  return length;
};

export default shortestWord;
