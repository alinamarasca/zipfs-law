const textToArray = text => {
  const fixedSpace = text.replace(/[^A-Za-z]\s+/g, " ");
  // cuts extra spaces, creates array
  const array = fixedSpace.trim().split(" ");
  return array;
};

export default textToArray;
