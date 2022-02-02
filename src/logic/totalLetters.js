const totalLetters = text => {
  // exclude dots
  const dotsRemoved = text.replaceAll(".", "");
  // exclude numbers
  const digitsRemoved = dotsRemoved.replace(/[0-9]/g, "");
  // calculate words
  let letterCount = digitsRemoved.replace(/\s+/g, "").length;
  return letterCount;
};

export default totalLetters;
