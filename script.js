document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const burger = document.querySelector('.burger_menu');
const nav = document.querySelector('.navigation');

const handleclick = () => {
    burger.classList.toggle('burger_menu--active')
    nav.classList.toggle('navigation--active')
}

burger.addEventListener('click', handleclick)