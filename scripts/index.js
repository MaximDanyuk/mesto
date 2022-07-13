/* Переменные для попапа */
let editButton = document.querySelector('.profile__image-edit');
let closeButton = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');

function popupOpen() {
  popup.classList.add('popup_opened');
  firstName.value = profileName.textContent;
  lastName.value = profileAbout.textContent;
}

editButton.addEventListener('click', popupOpen);

function popupClose() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', popupClose);

/* Переменные инпутов попапа, формы и кнопки */
let firstName = document.querySelector('.popup__input_type_name');
let lastName = document.querySelector('.popup__input_type_about');

let popupForm = document.querySelector('.popup__form');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = firstName.value;
  profileAbout.textContent = lastName.value;
  popup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', formSubmitHandler);
