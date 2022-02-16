import textToArray from "./textToArray";

const longestWord = text => {
  const array = textToArray(text);
  const length = array.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, array[0]).length;
  return length;
};

export default longestWord;
