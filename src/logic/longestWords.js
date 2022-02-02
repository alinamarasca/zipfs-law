import longestWord from "./longestWord";
import textToArray from "./textToArray";

const longestWords = text => {
  const length = longestWord(text);
  const array = textToArray(text);
  const words = [];
  array.forEach(word => {
    if (word.length === length) words.push(word);
  });
  return words;
};

export default longestWords;
