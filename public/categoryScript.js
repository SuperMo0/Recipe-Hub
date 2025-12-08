let cards = document.querySelectorAll('.recipe-card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        location.replace(`/recipe/${card.dataset.id}`);
    })
})