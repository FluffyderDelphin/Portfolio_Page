const mainseactions = document.querySelectorAll('main');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
  let current = '';
  mainseactions.forEach((section) => {
    const seactionTop = section.offsetTop;
    const sectionHeigth = section.clientHeight;
    if (scrollY >= seactionTop - sectionHeigth / 3) {
      current = section.getAttribute('id');
      console.log(current);
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('nav_item_current');
    if (li.classList.contains(current)) {
      li.classList.add('nav_item_current');
    }
  });
});
