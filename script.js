document.addEventListener('DOMContentLoaded', function() {
  // Animate on scroll: Elements with the "animated" class
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

  // Navbar hide/show on scroll
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // If scrolling down and past a certain threshold (e.g., 100px)
    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  });
});