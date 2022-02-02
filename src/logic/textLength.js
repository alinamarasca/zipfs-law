import textToArray from "./textToArray";

const textLength = text => {
  const array = textToArray(text);
  return array.length;
};

export default textLength;
