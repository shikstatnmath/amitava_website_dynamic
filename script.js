document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animated');
  
  function checkVisibility() {
    const windowBottom = window.scrollY + window.innerHeight;
    animatedElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      if (elementTop < windowBottom - 50) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});
