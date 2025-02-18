document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const revealButton = document.getElementById("revealText");

    revealButton.addEventListener("click", function () {
        cards.forEach(card => {
            card.classList.toggle("revealed");
        });
    });
});