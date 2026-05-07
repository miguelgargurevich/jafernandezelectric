/* ============================================
   JAFernandez Electric — UI Enhancements JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Sticky Navbar: add .scrolled class on scroll ---- */
  var header = document.querySelector('.u-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ---- Scroll-triggered animations ---- */

  // Map of selector → animation class(es) to apply
  var animateConfig = [
    { selector: '.u-section-1 .u-image-1',            cls: ['ja-fade-left'] },
    { selector: '.u-section-1 .u-group-1',            cls: ['ja-fade-right'] },
    { selector: '.u-section-2 .u-image-1',            cls: ['ja-fade-up'] },
    { selector: '.u-section-2 .u-text-1',             cls: ['ja-fade-up'] },
    { selector: '.u-section-2 .u-text-2',             cls: ['ja-fade-up'] },
    { selector: '.u-section-2 .u-text-3',             cls: ['ja-fade-up'] },
    { selector: '.u-section-3 .u-text-1',             cls: ['ja-fade-up'] },
    { selector: '.u-section-4 .u-text-3',             cls: ['ja-fade-up'] },
    { selector: '.u-section-5 .u-text-1',             cls: ['ja-fade-up'] },
    { selector: '.u-section-5 .u-image-1',            cls: ['ja-fade-up'] },
  ];

  animateConfig.forEach(function (config) {
    document.querySelectorAll(config.selector).forEach(function (el) {
      config.cls.forEach(function (c) { el.classList.add(c); });
    });
  });

  // Stagger animation on service cards (section-3)
  document.querySelectorAll('.u-section-3 .u-repeater-1 > .u-list-item').forEach(function (el, i) {
    el.classList.add('ja-fade-up');
    el.style.transitionDelay = (i * 0.08) + 's';
  });

  // Stagger animation on commercial/residential cards (section-4)
  document.querySelectorAll('.u-section-4 .u-repeater-1 > .u-list-item').forEach(function (el, i) {
    el.classList.add('ja-fade-up');
    el.style.transitionDelay = (i * 0.12) + 's';
  });

  // Stagger animation on about-section list items (section-2)
  document.querySelectorAll('.u-section-2 .u-text-3 li').forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)';
    el.style.transition = 'opacity 0.5s ease ' + (0.3 + i * 0.07) + 's, transform 0.5s ease ' + (0.3 + i * 0.07) + 's';
    el.classList.add('ja-list-item');
  });

  /* ---- IntersectionObserver ---- */
  if ('IntersectionObserver' in window) {

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.ja-fade-up, .ja-fade-left, .ja-fade-right').forEach(function (el) {
      observer.observe(el);
    });

    // Observe list items in about section
    var listObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.ja-list-item').forEach(function (li) {
            li.style.opacity = '1';
            li.style.transform = 'translateX(0)';
          });
          listObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    var aboutList = document.querySelector('.u-section-2 .u-text-3');
    if (aboutList) {
      listObserver.observe(aboutList);
    }

  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('.ja-fade-up, .ja-fade-left, .ja-fade-right').forEach(function (el) {
      el.classList.add('is-visible');
    });
    document.querySelectorAll('.ja-list-item').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    });
  }

  /* ---- Active nav link highlight based on scroll ---- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.u-nav-1 .u-nav-link');

  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', function () {
      var scrollPos = window.scrollY + 120;
      sections.forEach(function (section) {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          navLinks.forEach(function (link) {
            link.classList.remove('u-text-active-grey-90');
            var href = link.getAttribute('href') || '';
            if (href.indexOf(section.id) !== -1) {
              link.classList.add('u-text-active-grey-90');
            }
          });
        }
      });
    }, { passive: true });
  }

});
