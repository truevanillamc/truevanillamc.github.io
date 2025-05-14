const image = document.getElementById('slideshow');
const imageCount = 4; // how many img
let currentImage = 1;
setInterval(() => {
  image.classList.add('fade-out');
  setTimeout(() => {
    currentImage = (currentImage % imageCount) + 1;
    image.src = `img/img-${currentImage}.png`;
    image.classList.remove('fade-out');
  }, 1000);
}, 8000); // 15 sec
