const textToArray = text => {
  const onlyLetters = text.replace(/[!?@#$%^&*:;.,"'0-9]/g, "");
  const fixedSpace = onlyLetters.replace(/[^A-Za-z]\s+/g, " ");
  const array = fixedSpace.trim().split(" ");
  return array;
};

export default textToArray;
