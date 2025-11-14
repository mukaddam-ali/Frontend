// Core interactions: nav toggle, testimonials carousel, tours filters
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Navbar hide on scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    const scrollThreshold = 5;
    let scrollTimeout;
    
    if (header) {
      window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const diff = scrollTop - lastScrollTop;
        
        if (Math.abs(diff) > scrollThreshold) {
          if (diff > 0 && scrollTop > 80) {
            header.classList.add('hidden');
          } else {
            header.classList.remove('hidden');
          }
          lastScrollTop = scrollTop;
        }
      }, false);
    }
    
    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    function updateNavMenuPosition() {
      if (navMenu && header && window.innerWidth <= 768) {
        const headerHeight = header.offsetHeight;
        navMenu.style.top = headerHeight + 'px';
      }
    }
    
    updateNavMenuPosition();
    window.addEventListener('resize', updateNavMenuPosition);
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }

    // Testimonials slideshow
    const testimonialsList = document.getElementById('testimonialsList');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    if (testimonialsList && testimonialPrev && testimonialNext && testimonialItems.length > 0) {
      let currentIndex = 0;
      const itemsPerView = window.innerWidth >= 1200 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
      const maxIndex = Math.max(0, testimonialItems.length - itemsPerView);
      
      function scrollToIndex(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        const itemWidth = testimonialsList.offsetWidth / itemsPerView;
        const scrollAmount = currentIndex * itemWidth;
        testimonialsList.scrollLeft = scrollAmount;
      }
      
      testimonialPrev.addEventListener('click', function() {
        scrollToIndex(currentIndex - 1);
      });
      
      testimonialNext.addEventListener('click', function() {
        scrollToIndex(currentIndex + 1);
      });
      
      window.addEventListener('resize', function() {
        const newItemsPerView = window.innerWidth >= 1200 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
        if (newItemsPerView !== itemsPerView) {
          location.reload();
        }
      });

      let touchStartX = 0;
      let touchEndX = 0;
      let mouseStartX = 0;
      let mouseEndX = 0;
      let isDragging = false;

      testimonialsList.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
      }, false);

      testimonialsList.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, false);

      testimonialsList.addEventListener('mousedown', function(e) {
        isDragging = true;
        mouseStartX = e.screenX;
      }, false);

      testimonialsList.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        mouseEndX = e.screenX;
      }, false);

      testimonialsList.addEventListener('mouseup', function(e) {
        if (!isDragging) return;
        isDragging = false;
        handleDrag();
      }, false);

      testimonialsList.addEventListener('mouseleave', function(e) {
        if (!isDragging) return;
        isDragging = false;
        handleDrag();
      }, false);

      function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            scrollToIndex(currentIndex + 1);
          } else {
            scrollToIndex(currentIndex - 1);
          }
        }
      }

      function handleDrag() {
        const dragThreshold = 50;
        const diff = mouseStartX - mouseEndX;

        if (Math.abs(diff) > dragThreshold) {
          if (diff > 0) {
            scrollToIndex(currentIndex + 1);
          } else {
            scrollToIndex(currentIndex - 1);
          }
        }
      }
    }

    // Tours filters (Tours page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const tourItems = document.querySelectorAll('.tour-item');

    function applyFilter(filter) {
      const f = (filter || 'all').toLowerCase();
      tourItems.forEach(item => {
        const cat = (item.getAttribute('data-category') || '').toLowerCase();
        if (f === 'all' || cat.split(/\s+/).includes(f) || cat.indexOf(f) !== -1) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    if (filterButtons.length && tourItems.length) {
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          filterButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          const filter = this.getAttribute('data-filter');
          applyFilter(filter);
        });
      });
      applyFilter('all');
    }

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', function() {
          const isActive = item.classList.contains('active');
          faqItems.forEach(i => i.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  });
// Auto-activate current page nav link across all pages
  try {
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link){
      var href = link.getAttribute('href');
      if (!href) return;
      var target = href.split('#')[0];
      if (target === '' || target === './') target = 'index.html';
      if (target === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current','page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  } catch(e) { /* no-op */ }
})();
