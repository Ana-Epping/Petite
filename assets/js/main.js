const scrollContainerCuisine = document.querySelector('div.scroll-container-cuisine');
const arrowLeft = document.querySelector('img.arrow-left');
const arrowRight = document.querySelector('img.arrow-right');

const SCROLL_AMOUNT = 350;

arrowLeft.addEventListener('click', () => scroll(-SCROLL_AMOUNT));
arrowRight.addEventListener('click', () => scroll(SCROLL_AMOUNT));
scrollContainerCuisine.addEventListener('scroll', () => mostrarOuOcultarSetas());
window.addEventListener('resize', mostrarOuOcultarSetas());

mostrarOuOcultarSetas();

function scroll(amount) {
    scrollContainerCuisine.scrollBy({ 
        left: amount, 
        behavior: "smooth"
    });
}

function ocultar(element) {
    element.style.display = "none";
}

function exibir(element) {
    element.style.display = "block";
}

function mostrarOuOcultarSetas() {
    if (scrollContainerCuisine.scrollLeft == 0) {
        ocultar(arrowLeft);
    } else {
        exibir(arrowLeft);
    }

    if ((scrollContainerCuisine.scrollWidth - scrollContainerCuisine.scrollLeft) == scrollContainerCuisine.clientWidth) {
        ocultar(arrowRight);
    } else {
        exibir(arrowRight)
    }
}