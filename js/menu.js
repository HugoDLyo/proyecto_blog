const menuDesplegable = document.querySelectorAll('details');

menuDesplegable.forEach((details) => {
    details.querySelector('summary').addEventListener('click', expandir)
});

function expandir() {
    menuDesplegable.forEach((details) => {
        details.removeAttribute('open')
    })
};