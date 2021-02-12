
const hambibuci = document.querySelector('.hamburger');
let hambi = false;
hambibuci.addEventListener('click', () => {
  if(hambi) {
    hambibuci.classList.remove('open');
    hambi = false;
  } else {
    hambibuci.classList.add('open');
    hambi = true;
  }
});