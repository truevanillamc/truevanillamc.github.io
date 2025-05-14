document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('slideshow');
  const imageCount = 4;
  let currentImage = 1;

  setInterval(() => {
    image.classList.add('fade-out');
    setTimeout(() => {
      currentImage = (currentImage % imageCount) + 1;
      image.src = `img/img-${currentImage}.png?v=2`;
      image.classList.remove('fade-out');
    }, 1000);
  }, 2000);
});
