import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { renderHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const productList = document.querySelector(".product-list");
  if (cartItems !== null) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    productList.innerHTML = htmlItems.join("");
  } else {
    productList.innerHTML = `<p class="empty-cart-message">Your cart is empty</p>`;
  }
}

function removeItemFromCart(id) {
  let cart = getLocalStorage("so-cart");
  cart = cart.filter((item) => item.Id !== id);
  setLocalStorage("so-cart", cart);
  renderCartContents();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider" data-id="${item.Id}">
  <a href="#" class="cart-card__image">
    <img src="${item.Image}" alt="${item.Name}" />
  </a>
  <a href="#"><h2 class="card__name">${item.Name}</h2></a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <span class="cart-card__remove" data-id="${item.Id}" >❌</span>
</li>`;
  return newItem;
}

// renderCartContents();

document
  .querySelector(".product-list")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("cart-card__remove")) {
      const itemId = event.target.dataset.id;
      removeItemFromCart(itemId);
    }
  });

renderHeaderFooter();
