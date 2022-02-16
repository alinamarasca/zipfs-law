const totalLetters = text => {
  const onlyLetters = text.replace(/[!?@#$%^&*:;.,"'0-9]/g, "");
  let letterCount = onlyLetters.replace(/\s+/g, "").length;
  return letterCount;
};

export default totalLetters;
