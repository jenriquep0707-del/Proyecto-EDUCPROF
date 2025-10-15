const cart = [];
const cartButton = document.getElementById("cartButton");
const cartModal = document.getElementById("cartModal");
const closeModal = document.getElementById("closeModal");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const checkoutButton = document.getElementById("checkoutButton");

// Abrir modal
cartButton.addEventListener("click", () => {
  cartModal.style.display = "block";
});

// Cerrar modal
closeModal.addEventListener("click", () => {
  cartModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === cartModal) cartModal.style.display = "none";
});

// Agregar productos
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseInt(button.dataset.price);
    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price.toLocaleString()}`;
    cartItems.appendChild(div);
    total += item.price;
  });
  cartTotal.textContent = total.toLocaleString();
  cartCount.textContent = cart.length;
}

// Finalizar compra
checkoutButton.addEventListener("click", () => {
  alert("Gracias por tu compra ☕");
  cart.length = 0;
  updateCart();
  cartModal.style.display = "none";
});
