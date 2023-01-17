const phoneInputs = document.querySelectorAll('.modal__input-phone');
const modalButtons = document.querySelectorAll('.modal__button');



phoneInputs.forEach((phoneInput) => {
  const mask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
  });
  phoneInput.addEventListener('input', () => {
    if(mask.masked.isComplete) {
      modalButtons.forEach((modalButton) => {
        modalButton.classList.add('modal__button-active');
      });
    } else {
      modalButtons.forEach((modalButton) => {
        modalButton.classList.remove('modal__button-active');
      });
    }
  });
});
