// Efeito de clique no botão

const card = document.querySelector(".card");

card.addEventListener("click", function () {

    card.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(0.96)" },
            { transform: "scale(1.02)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 300,
            easing: "ease-out"
        }
    );

});
