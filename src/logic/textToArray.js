const textToArray = text => {
  // strip text of non letters
  const onlyLetters = text.replace(/[!?@#$%^&*:;.,"'0-9]/g, "");
  const fixedSpace = onlyLetters.replace(/[^A-Za-z]\s+/g, " ");
  // cuts extra spaces, creates array
  const array = fixedSpace.trim().split(" ");
  return array;
};

export default textToArray;
