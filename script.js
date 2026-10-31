(() => {
  const langBtn = document.getElementById('langBtn');
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if (!langBtn || !menuBtn || !nav) return;

  let language = 'en';
  const pageTitle = {
    en: 'Chief Tailor | الخياط الكبير – Doha, Qatar',
    ar: 'الخياط الكبير | Chief Tailor – الدوحة، قطر'
  };

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', next === 'ar');
    document.title = pageTitle[next];

    document.querySelectorAll('[data-en]').forEach((element) => {
      const value = element.getAttribute(`data-${next}`);
      if (value !== null) element.innerHTML = value;
    });

    langBtn.textContent = next === 'en' ? 'العربية' : 'English';
    langBtn.setAttribute('aria-label', next === 'en' ? 'Switch language to Arabic' : 'Switch language to English');
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  langBtn.addEventListener('click', () => setLanguage(language === 'en' ? 'ar' : 'en'));
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
