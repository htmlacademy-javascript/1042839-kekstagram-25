const pictureElement = document.querySelector('.pictures');

function renderPhotos(photos) { //функция отрисовки фото параметром в котрую передается функция generateData
  const fragment = document.createDocumentFragment(); //обьект добавления элементов
  const templateElement = document.querySelector('#picture').content.querySelector('.picture'); //находит эдемент с id, находит вложенные элементы а и записывет в переменную

  for (const photo of photos) {
    const element = templateElement.cloneNode(true);
    element.querySelector('.picture__img').setAttribute('src', photo.url);
    element.querySelector('.picture__likes').textContent = photo.likes;
    element.querySelector('.picture__comments').textContent = photo.comments.length;
    fragment.append(element);
  }

  pictureElement.append(fragment);
}

export {renderPhotos};
