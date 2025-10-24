document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('slideshow');
  const imageCount = 9;
  
  for (let i = 1; i <= imageCount; i++) {
    const img = new Image();
    img.src = `media/img-${i}.png?v=5`;
  }
  
  let currentImage = Math.floor(Math.random() * (imageCount - 1)) + 1;
  
  image.src = `media/img-${currentImage}.png?v=5`;
  image.style.width = "1100px";
  
  setInterval(() => {
    currentImage = (currentImage % imageCount) + 1;
    image.src = `media/img-${currentImage}.png?v=5`;
    image.style.width = "1100px";
  }, 5000);
});