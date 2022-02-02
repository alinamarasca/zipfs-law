const totalDigits = text => {
  // remove letters
  const lettersRemoved = text.replace(/\D/g, "");
  // turn into array
  const digitsCount = lettersRemoved.replace(/\s+/g, "").length;
  return digitsCount;
};

export default totalDigits;
