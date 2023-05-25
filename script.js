const accordion = document.querySelectorAll('.accordion');
const panel = document.querySelectorAll('.panel');
const accordionImg = document.querySelectorAll('.accordion-img');
const headlineTwo = document.querySelectorAll('h2');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        headlineTwo[i].classList.toggle('bold')
        panel[i].classList.toggle('visible');
        accordionImg[i].classList.toggle('rotate')
    })
}