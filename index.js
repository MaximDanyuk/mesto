/* Переменные для попапа */
let editButton = document.querySelector(".profile__image-edit");
let closeButton = document.querySelector(".popup__submit-btn_action_close");
let popup = document.querySelector(".popup");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

/// Повысить качество пользовательского опыта, закрытие попапа по эскейпу, давно привычная фича, можно оставить?
document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("popup_opened");
  }
});

/* Переменные инпутов попапа, формы и кнопки */
let firstName = document.querySelector(".popup__input-name");
let lastName = document.querySelector(".popup__input-about");
let saveButton = document.querySelector(".popup__submit-btn_action_add");

let form = document.querySelector(".popup__form");

let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = firstName.value;
  profileAbout.textContent = lastName.value;
  popup.classList.remove("popup_opened");

  ///   Защита от переполнения имени
  if (firstName.value.length > 20) {
    profileName.style.fontSize = "2.6vw";
  } else {
    profileName.style.fontSize = "3.28vw";
  }

  ///   Защита от переполнения описания, вопрос не по спринту, почему код после элсе не работает?

  if (lastName.value.length > 60) {
    saveButton.setAttribute("disabled", true);
  } else {
    saveButton.removeAttribute("disabled");
  }
}

form.addEventListener("submit", formSubmitHandler);

/* Вопросы не по спринту, заметил, что не работают никакие кнопки по нажатию на энтер, надо добавить обработчик событий по нажатию на эту кнопку?  */

/// Переменные для лайков

let hearts = document.querySelectorAll(".card__heart");

for (heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("card__heart_condition_active");
  });
}

/* heart.addEventListener("click", function () {
  if (heart.classList.contains("card__heart_condition_active")) {
    likesNumber.textContent--; // Добавить счетчик
  } else {
    likesNumber.textContent++;
  }
});
 */
