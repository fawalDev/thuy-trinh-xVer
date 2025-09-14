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

  revealItems.forEach(el => {
    el.style.transition = 'all 600ms cubic-bezier(.2,.9,.2,1)';
    el.style.transform = 'translateY(12px)';
    el.style.opacity = '0';
  });
  onScroll();
  window.addEventListener('scroll', onScroll);

  // congrats button
  const congratsBtn = document.getElementById('congratsBtn');
  const note = document.getElementById('note');
  congratsBtn.addEventListener('click', () => {
    note.classList.remove('hidden');
    note.textContent = 'Cảm ơn bạn đã gửi lời chúc! 💖';
    congratsBtn.disabled = true;
    congratsBtn.textContent = 'Đã gửi ✓';
    setTimeout(() => {
      congratsBtn.style.opacity = '0.98';
    }, 200);
  });

  // scroll to top
  document.getElementById('topBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

