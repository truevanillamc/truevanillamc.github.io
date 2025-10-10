document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('slideshow');
  const imageCount = 9;
  
  // to preload all images
  for (let i = 1; i <= imageCount; i++) {
    const img = new Image();
    img.src = `img/img-${i}.png?v=5`;
  }
  
  let currentImage = Math.floor(Math.random() * imageCount) + 1;

  image.src = `img/img-${currentImage}.png?v=5`;

  setInterval(() => {
    currentImage = (currentImage % imageCount) + 1;
    image.src = `img/img-${currentImage}.png?v=5`;
  }, 2000);
});