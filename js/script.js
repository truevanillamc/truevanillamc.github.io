document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('slideshow');
  const imageCount = 8;

  let currentImage = Math.floor(Math.random() * imageCount) + 1;

  image.src = `img/img-${currentImage}.png?v=3`;

  setInterval(() => {
    currentImage = (currentImage % imageCount) + 1;
    image.src = `img/img-${currentImage}.png?v=3`;
    void image.offsetWidth; // not sure what this does, google reccommended it ¯\_(ツ)_/¯
  }, 4000);
});
