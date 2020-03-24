
export const formatNumber = number => {

  const string = String(number);
  const splitString = string.split('');
  const output = [];
  for (let i = 0; i < splitString.length; i++) {
    if (i % 3 == 0 && i !== 0) {
      output.unshift(',');
    }
    output.unshift(splitString[splitString.length - 1 - i]);
  }
  return output.join('');
};
