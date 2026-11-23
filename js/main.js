// Klinika Kasmollari - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language System
  const availableLangs = ['sq', 'en', 'it', 'de', 'es'];
  let currentLang = localStorage.getItem('kk_lang') || 'sq';
  if (!availableLangs.includes(currentLang)) currentLang = 'sq';

  const flagIcons = {
    sq: '🇦🇱 SQ',
    en: '🇬🇧 EN',
    it: '🇮🇹 IT',
    de: '🇩🇪 DE',
    es: '🇪🇸 ES'
  };

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('kk_lang', lang);

    // Update active label in trigger
    const currentLangLabel = document.getElementById('current-lang-label');
    const mobileCurrentLangLabel = document.getElementById('mobile-current-lang-label');
    if (currentLangLabel) currentLangLabel.textContent = flagIcons[lang];
    if (mobileCurrentLangLabel) mobileCurrentLangLabel.textContent = flagIcons[lang];

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  // Language Dropdown Event Listeners
  document.querySelectorAll('.lang-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.currentTarget.getAttribute('data-lang');
      setLanguage(selected);
      const langDropdown = document.getElementById('lang-dropdown');
      if (langDropdown) langDropdown.classList.add('hidden');
    });
  });

  const langTrigger = document.getElementById('lang-trigger');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langTrigger && langDropdown) {
    langTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
      langDropdown.classList.add('hidden');
    });
  }

  // Initial translation apply
  setLanguage(currentLang);

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. Appointment Modal Logic
  const modal = document.getElementById('appointment-modal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');
  const closeModalBtns = document.querySelectorAll('.close-booking-modal');

  function openModal(prefillService = '') {
    if (!modal) return;
    if (prefillService) {
      const srvSelect = document.getElementById('form-service-input');
      if (srvSelect) srvSelect.value = prefillService;
    }
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle Form Submission -> WhatsApp Link
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name-input').value.trim();
      const phone = document.getElementById('form-phone-input').value.trim();
      const service = document.getElementById('form-service-input').value;
      const doctor = document.getElementById('form-doctor-input').value;
      const date = document.getElementById('form-date-input').value;
      const time = document.getElementById('form-time-input').value;
      const notes = document.getElementById('form-notes-input').value.trim();

      let text = `Përshëndetje Klinika Kasmollari!\n\nDua të rezervoj një takim:\n`;
      text += `👤 Emri: ${name}\n`;
      text += `📞 Tel: ${phone}\n`;
      if (service) text += `🦷 Shërbimi: ${service}\n`;
      if (doctor) text += `👨‍⚕️ Mjeku: ${doctor}\n`;
      if (date) text += `📅 Data: ${date}\n`;
      if (time) text += `⏰ Ora: ${time}\n`;
      if (notes) text += `📝 Shënim: ${notes}\n`;

      const encoded = encodeURIComponent(text);
      const waUrl = `https://wa.me/355692332227?text=${encoded}`;

      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Po hapim WhatsApp...';
      submitBtn.disabled = true;

      setTimeout(() => {
        window.open(waUrl, '_blank');
        closeModal();
        bookingForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 600);
    });
  }

  // 4. Logo Lines Animation Replay Handler
  const replayBtn = document.getElementById('replay-logo-btn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      const svg = document.getElementById('hero-logo-svg');
      if (svg) {
        const paths = svg.querySelectorAll('.k-line-cross, .k-line-swoosh, .k-line-arrow, .k-logo-fill');
        paths.forEach(p => {
          p.style.animation = 'none';
          void p.offsetHeight; // trigger browser reflow
          p.style.animation = '';
        });
      }
    });
  }

  // 5. Header scroll shadow
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
});
