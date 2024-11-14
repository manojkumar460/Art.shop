// Toggle search bar on header click
document.querySelector('.logo').addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
  });
  