import textToArray from "./textToArray";

const longestWord = text => {
  const words = textToArray(text);
  const longest = words.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, words[0]);
  return longest.length;
};

export default longestWord;
