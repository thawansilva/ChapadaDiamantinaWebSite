// Scroll to
const itemScroll = document.querySelector("a[href^='#']")
itemScroll.addEventListener('click', goToHref)
function goToHref(e) {
    e.preventDefault()
    const elementScroll = getSection(e.target)
    window.scrollTo({
        top: elementScroll.offsetTop - 50,
        behavior: 'smooth'
    })
}
function getSection(el) {
    const id = el.getAttribute('href');
    return document.querySelector(`${id}`)
}
// Scroll effect
const target = document.querySelectorAll('[data-anime]')
const classAnimate = 'animate'
 
 // Debounce para "segurar" o scroll
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function scrollSlide() {
    const windowTop = window.scrollY + (window.innerHeight * .85);
    target.forEach(element => {
        if(windowTop > element.offsetTop) {
            element.classList.add(classAnimate)
        } else {
            element.classList.remove(classAnimate)
        }
    })
}


window.addEventListener('load', scrollSlide)
window.addEventListener('scroll', debounce(scrollSlide,20))