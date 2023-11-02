import {
  getLocalStorage,
  setLocalStorage,
  renderHeaderFooter,
} from "./utils.mjs";

function renderCartContents() {
  const productList = document.querySelector(".product-list");
  const cartItems = getLocalStorage("so-cart") || [];
  let cartHTML = "";

  if (cartItems.length > 0) {
    cartHTML = `<ul class="cart-list">`;

    cartItems.forEach((item) => {
      cartHTML += `
        <li class="cart-card">
          <div>
            <a href="/product_pages/index.html?productid=${item.Id}" class="cart-card__image">
              <img src="${item.Images.PrimaryMedium}" alt="${item.Name}" />
            </a>
            <div>
              <a href="../product_pages/index.html?product=${item.Id}">
                <h2 class="card__name">${item.Name}</h2>
              </a>
              <p class="cart-card__color">${item.Colors[0].ColorName}</p>
              <p class="cart-card__quantity">Quantity: ${item.Quantity}</p>
              <p class="cart-card__price">$${item.FinalPrice}</p>
            </div>
          </div>
          <button class="cart-card__remove" data-id="${item.Id}">
            Remove
          </button>
        </li>`;
    });

    cartHTML += `</ul>`;

    // Renamed variable here to avoid shadowing
    const cartTotal = cartItems.reduce(
      (total, item) => total + item.FinalPrice * item.Quantity,
      0
    );
    cartHTML += `
      <div class="cart-footer show">
        <p class="item-count">Total Items: ${cartItems.length}</p>
        <p class="cart-total">Total: $${cartTotal.toFixed(2)}</p>
        <button class="checkout-button">Checkout</button>
      </div>`;
  } else {
    cartHTML = `<p class="empty-cart-message">Your cart is empty</p>`;
  }

  productList.innerHTML = cartHTML;
  attachEventListeners();
}

function attachEventListeners() {
  const productList = document.querySelector(".product-list");

  productList.addEventListener("click", function (event) {
    const removeBtn = event.target.closest(".cart-card__remove");
    if (removeBtn) {
      const id = removeBtn.getAttribute("data-id");
      removeItemFromCart(id);
    }

    const checkoutBtn = event.target.closest(".checkout-button");
    if (checkoutBtn) {
      handleCheckout();
    }
  });
}

function removeItemFromCart(id) {
  // Retrieve the current state of the cart from local storage
  let cartItems = getLocalStorage("so-cart") || [];

  // Find the index of the item in the cart
  const itemIndex = cartItems.findIndex((item) => item.Id.toString() === id);

  if (itemIndex !== -1) {
    if (cartItems[itemIndex].Quantity > 1) {
      // Decrement the quantity if more than one
      cartItems[itemIndex].Quantity -= 1;
    } else {
      // Remove the item from the cart if only one left
      cartItems = cartItems.filter((item, index) => index !== itemIndex);
    }

    // Update the cart in local storage and re-render the cart
    setLocalStorage("so-cart", cartItems);
    renderCartContents(); // Re-render the cart contents
  }
}

function handleCheckout() {
  console.log("Proceeding to checkout...");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartContents();
  renderHeaderFooter();
});
