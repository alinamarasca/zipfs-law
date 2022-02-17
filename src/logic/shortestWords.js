import shortestWord from "./shortestWord";
import textToArray from "./textToArray";

const shortestWords = text => {
  const array = textToArray(text);
  const length = shortestWord(text);
  const words = [];
  array.forEach(word => {
    if (word.length === length) words.push(word);
  });
  return [...new Set(words)];
};

export default shortestWords;
