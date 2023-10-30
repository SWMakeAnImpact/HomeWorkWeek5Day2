// Task 3 Menu Data Structure Revised for W5D2
var menuLinks = [
    { text: 'about', href: '/about' },
    {
      text: 'catalog',
      href: '#',
      subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
      ],
    },
    {
      text: 'orders',
      href: '#',
      subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
      ],
    },
    {
      text: 'account',
      href: '#',
      subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
      ],
    },
  ];
  
  // Task 1
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

// Task 2
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Task 3.1
menuLinks.forEach(function (link) {
    let a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    topMenuEl.appendChild(a);
  });

// Task 4.0
let subMenuEl = document.getElementById('sub-menu');

// Task 4.1
subMenuEl.style.height = '100%';

// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
subMenuEl.classList.add('flex-around');

// Task 4.4
subMenuEl.style.position = 'absolute';

// Task 4.5
subMenuEl.style.top = '0';

// Task 5.1
const topMenuLinks = Array.from(topMenuEl.getElementsByTagName('a'));

// Task 5.2
let showingSubMenu = false;
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault(); 

  if (event.target.tagName !== 'A') {
    return; 
  }

  console.log(event.target.textContent); 

  // Task 5.3
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  // Task 5.4
  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });

  // Task 5.5
  event.target.classList.add('active');

  // Task 5.6
  let linkObject = menuLinks.find(function (link) {
    return link.text.toLowerCase() === event.target.textContent.toLowerCase();
  });

  if (linkObject && linkObject.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  // Task 5.7
  if (showingSubMenu) {
    buildSubMenu(linkObject.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
  }
});

// Task 5.8
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = ''; 
  subLinks.forEach(function (link) {
    let a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    subMenuEl.appendChild(a);
  });
}

// Task 6.0
document.querySelector('#sub-menu').addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.tagName !== 'A') return;
  console.log(event.target.textContent);

  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  // Task 6.2
  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });

  // Task 6.3
  mainEl.innerHTML = '<h1>' + event.target.textContent + '</h1>';

  // Task 6.4
  if (event.target.textContent.toLowerCase() === 'about') {
    mainEl.innerHTML = '<h1>about</h1>';
  }
});
