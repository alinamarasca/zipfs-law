import shortestWord from "./shortestWord";
import textToArray from "./textToArray";

const shortestWords = text => {
  const digitsRemoved = text.replace(/[0-9]/g, "");
  const length = shortestWord(text);
  const array = textToArray(digitsRemoved);
  const words = [];
  array.forEach(word => {
    if (word.length === length) words.push(word);
  });
  return words;
};

export default shortestWords;
