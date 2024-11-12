class LogoView {
  _parentElement = document.querySelector('.header__logo'); // This targets the logo element

  addHandlerClick(handler) {
    // Add the event listener for click
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });

    // Change the cursor on mouse enter and leave for the logo element
    this._parentElement.addEventListener('mouseenter', () => {
      this._parentElement.style.cursor = 'pointer'; // Change cursor when entering the logo
    });

    this._parentElement.addEventListener('mouseleave', () => {
      this._parentElement.style.cursor = 'default'; // Reset cursor when leaving the logo
    });
  }
}

export default new LogoView();
