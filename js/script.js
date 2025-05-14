document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('slideshow');
  const imageCount = 8;
  let currentImage = 1;

  setInterval(() => {
    currentImage = (currentImage % imageCount) + 1;
    image.src = `img/img-${currentImage}.png?v=3`;
    void image.offsetWidth;
  }, 4000);
});
