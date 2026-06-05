let langueActuelle = localStorage.getItem('langue') || 'fr';

document.addEventListener('DOMContentLoaded', () => {
  appliquerLangue(langueActuelle);
});

function toggleLang() {
  langueActuelle = langueActuelle === 'fr' ? 'en' : 'fr';
  localStorage.setItem('langue', langueActuelle);
  appliquerLangue(langueActuelle);
}

function appliquerLangue(langue) {
  const bouton = document.querySelector('.btn-lang');
  if (bouton) bouton.textContent = langue === 'fr' ? 'EN' : 'FR';

  document.querySelectorAll('[data-fr], [data-en]').forEach(el => {
    const texte = el.getAttribute('data-' + langue);
    if (texte) el.textContent = texte;
  });

  document.querySelectorAll('[data-placeholder-fr], [data-placeholder-en]').forEach(el => {
    const ph = el.getAttribute('data-placeholder-' + langue);
    if (ph) el.setAttribute('placeholder', ph);
  });
}
