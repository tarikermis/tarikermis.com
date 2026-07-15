const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector<HTMLElement>('[data-header]');
const page = document.querySelector<HTMLElement>('.site-page');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const currentYear = String(new Date().getFullYear());
document.querySelectorAll<HTMLElement>('[data-year]').forEach((node) => {
  node.textContent = currentYear;
  if (node instanceof HTMLTimeElement) node.dateTime = currentYear;
});

const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
if (!reducedMotion && 'IntersectionObserver' in window) {
  document.body.classList.add('has-reveal');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (!reducedMotion && page && window.matchMedia('(pointer: fine)').matches) {
  page.addEventListener(
    'pointermove',
    (event) => {
      page.style.setProperty('--pointer-x', `${event.clientX}px`);
      page.style.setProperty('--pointer-y', `${event.clientY}px`);
    },
    { passive: true },
  );
}

const dialog = document.querySelector<HTMLDialogElement>('#quick-links');
const openButtons = document.querySelectorAll<HTMLButtonElement>('[data-links-open]');
const closeButton = document.querySelector<HTMLButtonElement>('[data-links-close]');

const openDialog = () => {
  if (!dialog) return;
  dialog.showModal();
  document.body.classList.add('dialog-open');
};

const closeDialog = () => {
  if (!dialog) return;
  dialog.close();
};

openButtons.forEach((button) => button.addEventListener('click', openDialog));
closeButton?.addEventListener('click', closeDialog);
dialog?.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
});
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog();
});

const copyButton = document.querySelector<HTMLButtonElement>('[data-copy-email]');
copyButton?.addEventListener('click', async () => {
  const email = copyButton.dataset.copyEmail;
  const label = copyButton.querySelector('span');
  if (!email || !label) return;

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const input = document.createElement('textarea');
    input.value = email;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }

  label.textContent = copyButton.dataset.copiedLabel || 'Copied';
  copyButton.classList.add('is-copied');
  window.setTimeout(() => {
    label.textContent = copyButton.dataset.defaultLabel || 'Copy email';
    copyButton.classList.remove('is-copied');
  }, 2200);
});
