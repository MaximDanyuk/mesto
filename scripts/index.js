/* Переменные инпутов попапа, формы и кнопки  */
let firstName = document.querySelector('.popup__input_type_name');
let lastName = document.querySelector('.popup__input_type_about');

/* Переменные для попапа 1 */
let editButton = document.querySelector('.profile__bio-edit');
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

/// Переменные для попапа 2
let addButton = document.querySelector('.profile__edit-button');
let addPopup = document.querySelector('.popup_edit');
let AddPopupCloseButton = document.querySelector('.popup__btn-close_add-popup');
let placeName = document.querySelector('.popup__input_type_Addname'); /// title second form
let photoLink = document.querySelector('.popup__input_type_Addabout'); /// image second form

function popupAddOpen() {
  addPopup.classList.add('popup_opened');
}

addButton.addEventListener('click', popupAddOpen);

function popupAddClose() {
  addPopup.classList.remove('popup_opened');
}

AddPopupCloseButton.addEventListener('click', popupAddClose);

/* Переменные инпутов попапа, формы и кнопки */

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

/// Архив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

/// создание карточек
const photoGallery = document.querySelector('.photo-gallery');
const buttonAdd = document.querySelector('.popup__btn-add');

function photoCreate(imageValue, titleValue) {
  const tamlateCard = document
    .querySelector('#tamlate-card')
    .content.querySelector('.card'); /// template
  const card = tamlateCard.cloneNode(true); /// card
  const cardImage = card.querySelector('.card__image'); /// image
  const cardTitle = card.querySelector('.card__title'); /// text

  cardImage.setAttribute('alt', `Изображение ${titleValue}`); /// set alt
  cardImage.src = imageValue; ///
  cardTitle.textContent = titleValue; ///

  photoGallery.prepend(card); /// to the beginning
  addPopup.classList.remove('popup_opened'); /// close after press

  const trash = document.querySelector('.card__remove-button'); /// trash
  trash.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    closestCard = eventTarget.closest('.card');
    closestCard.remove();
  });

  const cardHeart = document.querySelector('.card__heart'); /// like
  cardHeart.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__heart_active');
  });

  /// popup image
  const fullSize = document.querySelector('.full-size');
  let fullSizeImage = document.querySelector('.full-size__image');
  let imageDescription = document.querySelector('figcaption');

  cardImage.addEventListener('click', function () {
    fullSize.classList.add('full-size__wrapper_visible');
    fullSizeImage.src = cardImage.src;
    imageDescription.textContent = cardTitle.textContent;
  });

  const closeFullImage = document.querySelector('.full-size__close-image');
  closeFullImage.addEventListener('click', function () {
    fullSize.classList.remove('full-size__wrapper_visible');
  });

  return card;
}

/// Связь с попапом
const popupFormAdd = document.querySelector('.popup__form-add'); /// second form
function addEventListener() {
  popupFormAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
    photoCreate(photoLink.value, placeName.value);
    placeName.value = '';
    photoLink.value = '';
  });
}

function createInitialCards() {
  initialCards.forEach(function (item) {
    photoCreate(item.link, item.name);
  });
}

addEventListener();
createInitialCards();
