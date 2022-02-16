import textToArray from "./textToArray";

const countWords = text => {
  const arr = textToArray(text);
  const wordMap = new Map();
  for (const word of arr) {
    wordMap.has(word)
      ? wordMap.set(word, wordMap.get(word) + 1)
      : wordMap.set(word, 1);
  }

  // we should return array because it's easier to iterate
  return Array.from(wordMap, ([key, value]) => {
    return { word: key, occurrences: value };
  });
};

export default countWords;
