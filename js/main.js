function getRandomNumber (minNumber, maxNumber) {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  if (maxNumber <= minNumber) {
    return false;// условие. если максимальное число меньше или равно минимальному, верни false.
  }
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; //тело функции взято с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

const getMaxComment = (commentLength, maxSumbol) => commentLength <= maxSumbol;

getMaxComment (0, 140);

function generateData() { //генерирует 25 обьектов
  const result = [];
  for (let i = 1; i <= 25; i++) {
    result.push(generateItem(i));
  }
  return result;
}

function generateItem(i) {
  const generateComents = ();
  return {
    id: i,
    url: 'photos/[i].jpg',
    description: 'просто очередное фото',
    likes: getRandomNumber(15, 200),
    comments: generateComents
  };
};

const commentsCount = getRandomNumber(0, 10);

const comments = getRandomComments(commentsCount) {
  return {
  id: commentsCount,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: randomNameIndex,
  }
};

const NAMES = ['Анна',
  'Ольга',
  'Вика',
  'Артур',
  'Максим',
  'Лера',
  'Сергей',
  'Владимир',
  'Артём',
  'Франсуаза',
  'Жюстин',
  'Амели',
  'Пол',
  'Влад',
  'Дарья',
  'Маргарита',
  'Илья',
  'Артур',
  'Роман',
  'Роберт',
  'Татьяна',
  'Светлана',
  'Валерия',
  'Игорь',
  'Степан'
]; //массив с именами, по числу объектов

const generateComents = () => {
  const randomId = getRandomNumber(0, 200);
  const randomAvatar = getRandomNumber(0, 6);
  const randomNameIndex = getRandomNumber(0, NAMES.length - 1);
  return {
    id: randomId,
    avatar: `img/avatar-${randomAvatar[i]}.svg`,
    message: 'В целом всё неплохо. Но не всё.',
    name: NAMES[randomNameIndex]
  };
};
