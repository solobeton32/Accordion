
const accordions = document.querySelectorAll('.accordion-item');
Array.from(accordions).forEach(accordion => {
    accordion.addEventListener('click', function () {
        const target = this.dataset.target;
        const targetEll = document.querySelector(target);
        targetEll.classList.toggle('show');
        const icon = this.querySelector('.fa-solid');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    })
})
