
// Check Active Nabar Item
const mainseactions = document.querySelectorAll('main');
const navLi = document.querySelectorAll('nav ul li');

function resizeCallback(){
  mainseactions.forEach(main => {    
    main.style.minHeight = (window.innerHeight) + 'px';
  })
}

function setCurrentNavItem(){
  let current = '';
  mainseactions.forEach((section) => {
    const seactionTop = section.offsetTop;
    console.log(scrollY);
    if (scrollY >= seactionTop) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('nav_item_current');
    if (li.classList.contains(current)) {
      li.classList.add('nav_item_current');
    }
  });
}

/** 
 * this is just to call the resize callback when the document
 * is loaded because `resize` event doesn't trigger when the document
 * is first opened
*/
resizeCallback();
window.addEventListener('resize', resizeCallback);


/** 
 * this is just to call the scroll callback when the document
 * is loaded because `scroll` event doesn't trigger when the document
 * is first opened
*/
setCurrentNavItem();
window.addEventListener('scroll', setCurrentNavItem);

// Show and Hide Totally11
window.addEventListener('keypress', (e) => {
  if (e.key === 't') {
    let tota11y = document.querySelector('#tota11y-toolbar');
    if (tota11y.style.display === 'none') tota11y.style.display = 'block';
    else tota11y.style.display = 'none';
  }
});
