document.addEventListener('DOMContentLoaded', function() {
  // Animate elements with the "animated" class as they enter the viewport
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

  // Navbar hide/show on scroll: Hide when scrolling down past 100px, show when scrolling up.
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector('.navbar');

  if (!navbar) {
    console.error("Navbar element not found.");
    return;
  }

  window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("Scroll Position:", currentScrollTop);
    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      // Scrolling down: hide navbar
      if (!navbar.classList.contains('hide')) {
        console.log("Hiding navbar");
      }
      navbar.classList.add('hide');
    } else {
      // Scrolling up: show navbar
      if (navbar.classList.contains('hide')) {
        console.log("Showing navbar");
      }
      navbar.classList.remove('hide');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  });
});