// функция которая возвращает случайное целое число в пределах диапазона включительно.
function getRandomNumber (minNumber, maxNumber) {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  if (maxNumber <= minNumber) {
    return false;// условие. если максимальное число меньше или равно минимальному, верни false.
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; //тело функции взято с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}
getRandomNumber(0, 100);

//функция определяющая максимальную длинну строки в комментариях
//Максимальная длина комментария 140 символов

function getMaxComment (string, maxSumbol) {
  if (string <= maxSumbol) {
    return true;
  }
  return false;
}

getMaxComment (0, 140);
