document.addEventListener("DOMContentLoaded", function() {
    const botaoAlternarTema = document.getElementById("alternar-tema");
    const iconeTema = document.getElementById("icone-tema");

    botaoAlternarTema.addEventListener("click", function() {
        document.body.classList.toggle("tema-claro");
        document.body.classList.toggle("tema-escuro");

        // Verifica se o tema escuro estÃ¡ ativado
        const temaEscuroAtivo = document.body.classList.contains("tema-escuro");

        // Alterna entre os Ã­cones de sol e lua
        if (temaEscuroAtivo) {
            iconeTema.classList.remove("fa-sun");
            iconeTema.classList.add("fa-moon");
        } else {
            iconeTema.classList.remove("fa-moon");
            iconeTema.classList.add("fa-sun");
        }
    });
});
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Altere o número para ajustar o tempo de transição entre as imagens (em milissegundos)
}

function plusSlides(n) {
    clearTimeout();
    slideIndex += n;
    showSlides();
}
