const tabs         = document.querySelectorAll('.tab');
const viewAll      = document.getElementById('view-all');
const viewFiltered = document.getElementById('view-filtered');
const filteredGrid = document.getElementById('filtered-grid');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // Update active tab style
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    // ── Show full sectioned view ──
    if (filter === 'all') {
      viewAll.classList.remove('hidden');
      viewFiltered.classList.add('hidden');
      return;
    }

    // ── Show filtered flat view ──
    viewAll.classList.add('hidden');
    viewFiltered.classList.remove('hidden');
    filteredGrid.innerHTML = '';

    const allCards = document.querySelectorAll('#view-all .game-card');
    let count = 0;

    allCards.forEach(card => {
      const country  = card.dataset.country;
      const category = card.dataset.category;

      if (filter === country || filter === category) {
        filteredGrid.appendChild(card.cloneNode(true));
        count++;
      }
    });

    if (count === 0) {
      filteredGrid.innerHTML =
        '<p class="no-results">No games in this category yet — check back soon! 🚀</p>';
    }
  });
});