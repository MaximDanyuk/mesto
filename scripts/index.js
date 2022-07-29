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

/* Переменные инпутов попапа, формы и кнопки  */
const firstName = document.querySelector('.popup__input_type_name');
const lastName = document.querySelector('.popup__input_type_about');

/* Переменные для попапа 1 */
const popupProfileOpenButton = document.querySelector('.profile__bio-edit');
const popupProfileСloseButton = document.querySelector('.popup__btn-close');
const popupProfile = document.querySelector('.popup_profile');
/// Переменные для попапа 2
const addButton = document.querySelector('.profile__edit-button');
const addPopup = document.querySelector('.popup_edit');
const addPopupCloseButton = document.querySelector(
  '.popup__btn-close_add-popup'
);

////////////////////////////////// Закрытие/открытие попапов(обработка переменных выше)
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupProfileOpenButton.addEventListener('click', () => {
  openPopup(popupProfile);
});

popupProfileСloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
});

addButton.addEventListener('click', () => {
  openPopup(addPopup);
});

addPopupCloseButton.addEventListener('click', () => {
  closePopup(addPopup);
});

popupProfileOpenButton.addEventListener('click', () => {
  firstName.value = profileName.textContent;
  lastName.value = profileAbout.textContent;
  openPopup(popupProfile);
});

//////////////////////////////////

/* Переменные инпутов попапа, формы и кнопки, отправка первого попапа */

const popupFormEdit = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = firstName.value;
  profileAbout.textContent = lastName.value;
  popupProfile.classList.remove('popup_opened');
}

popupFormEdit.addEventListener('submit', submitProfileForm);

/// создание карточек
const photoGallery = document.querySelector('.photo-gallery');
const buttonAdd = document.querySelector('.popup__btn-add');

function createPhoto(imageValue, titleValue) {
  const templateCard = document
    .querySelector('#tamlate-card')
    .content.querySelector('.card'); /// template
  const card = templateCard.cloneNode(true); /// card
  const cardImage = card.querySelector('.card__image'); /// image
  const cardTitle = card.querySelector('.card__title'); /// text
  cardImage.setAttribute('alt', `Изображение ${titleValue}`); /// set alt
  cardImage.src = imageValue; ///
  cardTitle.textContent = titleValue; ///

  addPopup.classList.remove('popup_opened'); /// close after press

  const trash = card.querySelector('.card__remove-button'); /// trash
  trash.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    closestCard = eventTarget.closest('.card');
    closestCard.remove();
  });

  const cardHeart = card.querySelector('.card__heart'); /// like
  cardHeart.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__heart_active');
  });

  /// popup image
  const fullSize = document.querySelector('.popup_full-size');
  const fullSizeImage = document.querySelector('.popup__full-size-image');
  const imageDescription = document.querySelector('.popup__description');

  cardImage.addEventListener('click', () => {
    openPopup(fullSize);
  });

  cardImage.addEventListener('click', function () {
    fullSizeImage.alt = cardImage.alt;
    fullSizeImage.src = cardImage.src;
    imageDescription.textContent = cardTitle.textContent;
    openPopup(fullSize);
  });

  const closeFullImage = document.querySelector('.popup__close-image');
  closeFullImage.addEventListener('click', () => {
    closePopup(fullSize);
  });

  return card;
}

/// Связь с попапом номер 2
const popupFormAdd = document.querySelector('.popup__form-add'); /// second form
const placeName = document.querySelector('.popup__input_type_Addname'); /// title second form
const photoLink = document.querySelector('.popup__input_type_Addabout'); /// image second form
popupFormAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  createPhoto(photoLink.value, placeName.value);
  renderCard(createPhoto(photoLink.value, placeName.value), photoGallery);
  placeName.value = '';
  photoLink.value = '';
});

/// Работа с массивом
function createInitialCards() {
  initialCards.forEach(function (item) {
    createPhoto(item.link, item.name);
  });
}
//////////////////////////////////////////////////////

/// функция добавление карточки в глобал скопе
function renderCard(card, container) {
  container.prepend(card);
}

/// функция добавление карточки в локал скопе
initialCards.forEach(function (item) {
  renderCard(createPhoto(item.link, item.name), photoGallery);
});

createInitialCards();
