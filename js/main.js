// Check Active Nabar Item

const mainseactions = document.querySelectorAll('main');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
  let current = '';
  mainseactions.forEach((section) => {
    const seactionTop = section.offsetTop;
    const sectionHeigth = section.clientHeight;
    if (scrollY >= seactionTop - sectionHeigth / 3) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('nav_item_current');
    if (li.classList.contains(current)) {
      li.classList.add('nav_item_current');
    }
  });
});

// Show and Hide Totally11

window.addEventListener('keypress', (e) => {
  if (e.key === 't') {
    let tota11y = document.querySelector('#tota11y-toolbar');
    if (tota11y.style.display === 'none') tota11y.style.display = 'block';
    else tota11y.style.display = 'none';
  }
});
