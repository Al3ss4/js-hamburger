
// add const hamburger-menu
const hamburgerMenu = document.querySelector(".hamburger-menu");

// add const open-hamburger-menu
const openHamburgerMenu = document.querySelector(".fas");

// add const close-hamburger-menu
const closeHamburgerMenu = document.querySelector(".close");


//open hamburger menu
openHamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
    }
);

//close hamburger menu
closeHamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
    }
);