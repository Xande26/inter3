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