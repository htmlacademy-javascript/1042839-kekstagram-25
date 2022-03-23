const uploadImage = document.querySelector('.img-upload__form');

new Pristine (uploadImage);

const uploadFile = document.querySelector('#upload-file');

uploadFile.addEventListener('click') {
    const imgUpload = document.querySelector('.img-upload__overlay');
    imgUpload.classList.remove('hidden');
    const body = document.querySelector('.body');
    body.classList.add('modal-open')
}

export{uploadFile}
