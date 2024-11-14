// Toggle search bar on header click
document.querySelector('.logo').addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
  });
  
  // Cart and Buy functionalities
  const cart = [];
  
  function addToCart(itemName, price) {
    cart.push({ itemName, price });
    alert(`${itemName} added to cart!`);
    console.log(cart);
  }
  
  function buyNow(itemName, price) {
    alert(`You have chosen to buy ${itemName} for $${price}. Proceed to payment.`);
    // Redirect to payment process or cart page if needed
  }
  