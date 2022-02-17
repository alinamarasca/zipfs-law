import longestWord from "./longestWord";
import textToArray from "./textToArray";

const longestWords = text => {
  const array = textToArray(text);
  const length = longestWord(text);
  const words = [];
  array.forEach(word => {
    if (word.length === length) words.push(word);
  });
  return [...new Set(words)];
};

export default longestWords;
