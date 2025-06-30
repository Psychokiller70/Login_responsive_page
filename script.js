const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.BtnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// Toggle popup login/register forms
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
});

// Show popup on login button click
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');

    // Close mobile nav if open
    if (navigation.classList.contains('active')) {
        navigation.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Hamburger toggle nav
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');
});
