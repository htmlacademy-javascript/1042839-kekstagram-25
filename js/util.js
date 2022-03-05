const minCommentsLength = 0;
const maxCommentsLength = 140;

function getRandomNumber(minNumber, maxNumber) {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  if (maxNumber <= minNumber) {
    return false;
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

const checkMaxCommentsLengths = (commentLength, maxSymbol) => commentLength <= maxSymbol;

checkMaxCommentsLengths(minCommentsLength, maxCommentsLength);

export{getRandomNumber};
