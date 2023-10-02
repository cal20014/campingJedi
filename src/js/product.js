import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { getParam } from  "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId, ".productDetails")

console.log(await findProductById(productId));

function addProductToCart(product) {
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

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
