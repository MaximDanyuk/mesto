/* Переменные для попапа */
let editButton = document.querySelector('.profile__image-edit');
let closeButton = document.querySelector('.popup__submit-btn_action_close');
let popup = document.querySelector('.popup');

editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

/* Переменные инпутов попапа, формы и кнопки */
let firstName = document.querySelector('.popup__input-name');
let lastName = document.querySelector('.popup__input-about');
let saveButton = document.querySelector('.popup__submit-btn_action_add');

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
