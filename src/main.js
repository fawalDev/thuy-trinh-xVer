// script.js — small interactions: reveal & simple button actions
document.addEventListener('DOMContentLoaded', () => {
  // simple reveal on scroll
  const revealItems = document.querySelectorAll('.card, .member, .hero-card');
  const onScroll = () => {
    const st = window.scrollY + window.innerHeight * 0.85;
    revealItems.forEach(el => {
      if (el.getBoundingClientRect().top + window.scrollY < st) {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      }
    });
  };
})

// Navigation
function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 600}px)`;
}

document.querySelector('.arrow.left').addEventListener("click", () => {
    index = (index > 0) ? index - 1 : 0;
    updateCarousel();
});

document.querySelector('.arrow.right').addEventListener("click", () => {
    index = (index < carousel.children.length - 1) ? index + 1 : carousel.children.length - 1;
    updateCarousel();
});

