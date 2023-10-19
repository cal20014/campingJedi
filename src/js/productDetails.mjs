import { findProductById } from "./productData.mjs";
import { getLocalStorage } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId, selector) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  // once we have the product details we can render out the HTML
  const element = document.querySelector(selector);
  element.insertAdjacentHTML("afterBegin", productDetailsTemplate(product));
  // add a listener to Add to Cart button
  document
    .querySelector("#addToCart")
    .addEventListener("click", addProductToCart);
}

export function addProductToCart() {
  // Get the existing cart data from local storage
  let cart = getLocalStorage("so-cart");

  // If the cart data doesn't exist, initialize an empty array for the cart
  if (!cart) {
    cart = [];
  }

  // Add the new product to the cart
  cart.push(product);

  // Store the updated cart data back in local storage
  setLocalStorage("so-cart", cart);
}

function productDetailsTemplate(item) {
  return `<h3>${item.Brand.Name}</h3>

  <h2 class="divider">${item.NameWithoutBrand}</h2>

  <img
    class="divider"
    src="${item.Images.PrimaryLarge}"
    alt="${item.Name}"
  />

  <p class="product-card__price">$${item.FinalPrice}</p>

  <p class="product__color">${item.Colors[0].ColorName}</p>

  <p class="product__description">${item.DescriptionHtmlSimple}</p>

  <div class="product-detail__add">
    <button id="addToCart" data-id="${item.Id}">Add to Cart</button>
  </div>`;
}
