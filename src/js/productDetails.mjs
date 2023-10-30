import { findProductById } from "./externalServices.mjs";
import { getLocalStorage } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";
import { cartCount } from "./store.mjs";

let product = {};

export default async function productDetails(productId, selector) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  const element = document.querySelector(selector);

  if (product === undefined) {
    element.insertAdjacentHTML("afterBegin", `<h2> Product not found</h2>`);
  } else {
    // once we have the product details we can render out the HTML
    element.insertAdjacentHTML("afterBegin", productDetailsTemplate(product));
    // add a listener to Add to Cart button
    document
      .querySelector("#addToCart")
      .addEventListener("click", addProductToCart);
  }
}

export function addProductToCart() {
  // Get the existing cart data from local storage
  let cart = getLocalStorage("so-cart");

  // If the cart data doesn't exist, initialize an empty array for the cart
  if (!cart) {
    cart = [];
  }

  const existingProduct = cart.find((item) => item.Id === product.Id);

  if (existingProduct) {
    existingProduct.Quantity += 1;
  } else {
    product.Quantity = 1;
    cart.push(product); // Only add the new product if it's not already in the cart
  }

  // Store the updated cart data back in local storage
  setLocalStorage("so-cart", cart);

  cartCount.set(cart.length);
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
