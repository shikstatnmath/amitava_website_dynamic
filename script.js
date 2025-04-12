document.addEventListener('DOMContentLoaded', function() {
  // Existing "animate on scroll" functionality
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

  // New: Dynamic hide/show sections based on scroll direction
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // Scrolling down: add the "hide-on-scroll" class to all sections
      sections.forEach(section => {
          section.classList.add('hide-on-scroll');
      });
    } else {
      // Scrolling up: remove the "hide-on-scroll" class
      sections.forEach(section => {
          section.classList.remove('hide-on-scroll');
      });
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  });
});