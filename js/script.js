document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('slideshow');
  const imageCount = 4;
  let currentImage = 1;

  setInterval(() => {
    // Fade out
    image.classList.add('fade-out');
    image.classList.remove('fade-in');

    // After fade-out, change image and fade back in
    setTimeout(() => {
      currentImage = (currentImage % imageCount) + 1;
      image.src = `img/img-${currentImage}.png?v=2`;

      // Force reflow to restart animation
      void image.offsetWidth;

      image.classList.remove('fade-out');
      image.classList.add('fade-in');
    }, 1000); // match CSS transition time
  }, 3000);
});
