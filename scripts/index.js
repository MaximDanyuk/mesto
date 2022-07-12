/* Переменные для попапа */
let editButton = document.querySelector('.profile__image-edit');
let closeButton = document.querySelector('.popup__btn-close');
let popup = document.querySelector('.popup');

function popupOpen(evt) {
  evt.preventDefault();
  popup.classList.add('popup_opened');
  firstName.value = profileName.textContent;
  lastName.value = profileAbout.textContent;
}

editButton.addEventListener('click', popupOpen);

function popupClose(evt) {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', popupClose);

/* Переменные инпутов попапа, формы и кнопки */
let firstName = document.querySelector('.popup__input-name_theme_position');
let lastName = document.querySelector('.popup__input-about_theme_position');

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
