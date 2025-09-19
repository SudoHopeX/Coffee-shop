function addToCart(item, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({item, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(item + " added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let container = document.getElementById('cart-items');
  let total = 0;
  if(container){
    container.innerHTML = '';
    cart.forEach((c,i) => {
      total += c.price;
      container.innerHTML += `<div>${c.item} - $${c.price.toFixed(2)} <button onclick="removeItem(${i})">Remove</button></div>`;
    });
    document.getElementById('cart-total').innerText = "Total: $" + total.toFixed(2);
  }
}

function removeItem(index){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index,1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function checkout(){
  alert("Checkout not implemented. This is a demo.");
}

window.onload = loadCart;
