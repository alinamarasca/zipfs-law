const longestWord = text => {
  const digitsRemoved = text.replace(/[0-9]/g, "");
  // find the shortest word

  const words = digitsRemoved.split(" ");
  const longest = words.reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, words[0]);
  return longest.length;
};

export default longestWord;
