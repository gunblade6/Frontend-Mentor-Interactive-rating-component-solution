const numbersArray = Array.from(
  document.querySelectorAll(`#mainCard ul li label`)
);
const form = document.querySelector(`form`);
const submitButton = document.getElementById(`submitButton`);
const rateSpan = document.getElementById(`rateSpan`);
const mainContainer = document.querySelector(`.container.main`);
const subContainer = document.querySelector(`.container.thankYou`);
const errorMessage = document.getElementById(`errorMessage`);
let selected = false;
let rate = 0;
window.sessionStorage.removeItem(`rate`);

form.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`label`)) {
    if (e.target.classList.contains(`active`)) {
      e.target.classList.remove(`active`);
      selected = false;
      submitButton.classList.add(`disabled`);
      mainContainer.classList.remove(`animated`);
      window.sessionStorage.removeItem(`rate`);
    } else {
      numbersArray.forEach((number) => {
        number.classList.remove(`active`);
      });
      e.target.classList.add(`active`);
      selected = true;
      rate = e.target.dataset.value;
      window.sessionStorage.setItem(`rate`, rate);
      errorMessage.style.display = `none`;
      submitButton.classList.remove(`disabled`);
    }
  }
});

submitButton.addEventListener(`click`, (e) => {
  if (selected) {
    return 1;
  } else {
    mainContainer.classList.add(`animated`);
    setTimeout(() => {
      mainContainer.classList.remove(`animated`);
    }, 500);
    errorMessage.style.display = `block`;
    e.preventDefault();
  }
});
