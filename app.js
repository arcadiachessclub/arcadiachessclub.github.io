// Make Variables
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Highlight a Menu item
const highlightMenu = () => {
    // Make Variables
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const officersMenu = document.querySelector('#officers-page');

    // Get Scroll Position
    let scrollPos = window.scrollY;

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        officersMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        officersMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    
      if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

// Event Listeners for highlighting a menu item
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
};

// Event Listeners for closing mobile menu once clicked a menu item
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// Type "Chess Club"
let i = 0;
const txt = 'Chess Club';
const speed = 150;
const delay = ms => new Promise(res => setTimeout(res, ms));

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("heading-title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

const writeHero = async () => {
    typeWriter();

    await delay(5000);
    document.getElementById("blinking-cursor").style.background = "transparent";
};

writeHero();