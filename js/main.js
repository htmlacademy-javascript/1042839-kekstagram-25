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
];

const minCommentsLength = 0;
const maxCommentsLength = 140;

const COMMENTS_COUNT = 25;

const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;

const MIN_NUMBER_COMMENTS = 0;
const MAX_NUMBER_COMMENTS = 6;

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

generateData(COMMENTS_COUNT);

function generateData(count) {
  const result = [];
  for (let i = 1; i <= count; i++) {
    result.push(generateItem(i));
  }
  return result;
}

function generateItem(i) {
  const generatedComments = generateComments(getRandomNumber(MIN_NUMBER_COMMENTS, MAX_NUMBER_COMMENTS));
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: 'просто очередное фото',
    likes: getRandomNumber(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
    comments: generatedComments
  };
}

function generateComments(count) {
  const result = [];
  for (let i = 1; i <= count; i++) {
    result.push(generateComment(i));
  }
  return result;
}

function generateComment(i) {
  const randomId = getRandomNumber(0, 200);
  const randomAvatar = getRandomNumber(0, 6);
  return {
    id: randomId,
    avatar: `img/avatar-${randomAvatar[i]}.svg`,
    message: 'В целом всё неплохо. Но не всё.',
    name: getRandomArrayElement(NAMES)
  };
}

function getRandomArrayElement(list) {
  const randomIndex = getRandomNumber(0, list.length - 1);
  return list[randomIndex];
}
