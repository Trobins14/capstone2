const parallaxImages = document.querySelectorAll(".parallax-image");

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
  parallaxImages.forEach((parallaxImage) => {
    const parallaxSpeed = parallaxImage.dataset.speed;
    const topPosition = -(scrollValue * parallaxSpeed) / 100;
    parallaxImage.style.transform = `translateY(${topPosition}px) scale(1.2)`;
  });
});