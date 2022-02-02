import textToArray from "./textToArray";

const countWords = text => {
  let arr = textToArray(text);
  let stats = [];
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      let word = `${arr[i]}`;
      let occurrence = `${count}`;
      let pair = new Map();
      pair.set(word, occurrence);
      stats = [...stats, pair];
      count = 1;
    }
  }
  console.log(stats);
  return stats;
};

export default countWords;
