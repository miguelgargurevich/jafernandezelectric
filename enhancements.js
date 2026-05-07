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

  /* ---- Feedback marquee: 30 cards in 6s continuous loop ---- */
  var feedbackTrack = document.getElementById('ja-feedback-track');
  if (feedbackTrack && !feedbackTrack.children.length) {
    var feedbackSeed = [
      {
        quote: '"They upgraded our panel and fixed recurring breaker trips in one visit. Professional, clean, and very fair pricing."',
        author: 'Maria R. - Massapequa, NY'
      },
      {
        quote: '"We needed urgent electrical work for our shop. J.A. Fernandez delivered fast and got us running without downtime."',
        author: 'David P. - Farmingdale, NY'
      },
      {
        quote: '"Best electrician we\'ve worked with. Clear communication, code-compliant work, and everything passed inspection first time."',
        author: 'Laura M. - Wantagh, NY'
      }
    ];

    var feedbackItems = [];
    for (var i = 0; i < 30; i++) {
      feedbackItems.push(feedbackSeed[i % feedbackSeed.length]);
    }

    feedbackItems.forEach(function (item) {
      var card = document.createElement('article');
      card.className = 'ja-feedback-item';

      var quote = document.createElement('p');
      quote.textContent = item.quote;

      var author = document.createElement('h4');
      author.textContent = item.author;

      card.appendChild(quote);
      card.appendChild(author);
      feedbackTrack.appendChild(card);
    });

    var feedbackWrap = feedbackTrack.closest('.ja-feedback-marquee');
    var currentIndex = 0;
    var stepWidth = 0;

    function recalcFeedbackWidth() {
      if (!feedbackWrap) {
        return;
      }
      stepWidth = feedbackWrap.clientWidth;
      feedbackTrack.style.transform = 'translateX(' + (-currentIndex * stepWidth) + 'px)';
    }

    function goToNextFeedback() {
      if (!stepWidth) {
        recalcFeedbackWidth();
      }
      currentIndex = (currentIndex + 1) % feedbackItems.length;
      feedbackTrack.style.transform = 'translateX(' + (-currentIndex * stepWidth) + 'px)';
    }

    recalcFeedbackWidth();
    window.addEventListener('resize', recalcFeedbackWidth);
    setInterval(goToNextFeedback, 6000);
  }

  /* ---- Service section: clickable cards + sales modal ---- */
  var serviceCards = document.querySelectorAll('.u-section-3 .u-list-item');
  if (serviceCards.length) {
    var serviceCopy = {
      'ground wells': 'Protect your property from expensive electrical failures before they happen. Our ground well installations create a safer, code-compliant electrical foundation that shields your equipment, appliances, and family from dangerous faults.',
      'luminaries': 'Turn ordinary spaces into high-impact environments. We install premium interior and exterior luminaries that improve security, boost curb appeal, and deliver the exact lighting performance your home or business needs.',
      'air conditioner': 'Your AC is only as reliable as its electrical setup. We build dedicated, protected connections that help your cooling system run stronger, last longer, and avoid overload-related shutdowns during peak summer demand.',
      'repairs': 'Electrical issues should never be guesswork. We diagnose fast, fix at the root, and restore full confidence in your system so you can stop worrying about recurring trips, flickers, and sudden outages.',
      'three phase services': 'Power your operation with the stability serious businesses require. Our three-phase installations are engineered for high-demand equipment, continuous performance, and safer long-term scalability.',
      'panels': 'An outdated panel limits everything. We upgrade panels to modern capacity so you can run today\'s appliances, future expansions, and high-load equipment without safety compromises or nuisance breaker trips.',
      'maintenance': 'Smart maintenance saves money and prevents downtime. We proactively inspect and tune your electrical system to catch hidden risks early, extend component life, and keep your property operating without interruptions.',
      'leakage': 'Hidden leakage can become a costly hazard. We locate and eliminate leakage paths with precision testing, reducing fire risk, improving electrical efficiency, and protecting your investment.'
    };

    var modal = document.createElement('div');
    modal.className = 'ja-service-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
      '<div class="ja-service-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="ja-service-title">' +
      '  <button class="ja-service-modal__close" aria-label="Close">&times;</button>' +
      '  <div class="ja-service-modal__content">' +
      '    <div class="ja-service-modal__media"></div>' +
      '    <div class="ja-service-modal__body">' +
      '      <div class="ja-service-modal__eyebrow">Premium Electrical Service</div>' +
      '      <h3 id="ja-service-title" class="ja-service-modal__title"></h3>' +
      '      <p class="ja-service-modal__description"></p>' +
      '      <a class="ja-service-modal__cta" href="tel:5165432052">Call Now: (516) 543-2052</a>' +
      '    </div>' +
      '  </div>' +
      '</div>';

    document.body.appendChild(modal);

    var modalTitle = modal.querySelector('.ja-service-modal__title');
    var modalDescription = modal.querySelector('.ja-service-modal__description');
    var modalMedia = modal.querySelector('.ja-service-modal__media');
    var modalClose = modal.querySelector('.ja-service-modal__close');

    function openServiceModal(title, image) {
      var key = (title || '').trim().toLowerCase();
      modalTitle.textContent = title || 'Electrical Service';
      modalDescription.textContent = serviceCopy[key] || 'Trusted, licensed electrical work delivered with safety, quality, and long-term reliability in mind for your home or business.';
      if (image && image !== 'none') {
        modalMedia.style.backgroundImage = image;
      } else {
        modalMedia.style.backgroundImage = 'linear-gradient(135deg, #0f2d68, #214f98)';
      }
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeServiceModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    serviceCards.forEach(function (card) {
      var titleEl = card.querySelector('h4');
      var imageEl = card.querySelector('.u-image-circle');
      if (!titleEl) {
        return;
      }

      card.classList.add('ja-service-clickable');
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Open details for ' + titleEl.textContent.trim());

      var imageValue = imageEl ? window.getComputedStyle(imageEl).backgroundImage : '';
      var titleValue = titleEl.textContent.trim();

      card.addEventListener('click', function () {
        openServiceModal(titleValue, imageValue);
      });

      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openServiceModal(titleValue, imageValue);
        }
      });
    });

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeServiceModal();
      }
    });

    modalClose.addEventListener('click', closeServiceModal);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeServiceModal();
      }
    });
  }

});
