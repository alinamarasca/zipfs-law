const totalLetters = text => {
  // calculate words
  let letterCount = text.replace(/\s+/g, "").length;
  return letterCount;
};

export default totalLetters;
