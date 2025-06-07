const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Show active while scrolling //

const highlight = () => {
    const elem = document.querySelector('.highlight')
    const home = document.querySelector('#home')
    const about = document.querySelector('#about')
    const port = document.querySelector('#port')
    const contact = document.querySelector('#contact')

}


// ทำให้มันกดไปหน้าอื่นได้ //

if(window.innerWidth > 960 && scrollPos < 600) {
    home.classList.add('highlight')
    about.classList.remove(highlight)
    return
} else if (window.innerWidth > 960 && scrollPos < 1400) {
    about.classList.add('highlight')
    home.classList.remove('highlight')
    port.classList.remove(highlight)
}

