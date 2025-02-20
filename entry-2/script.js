document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });
});