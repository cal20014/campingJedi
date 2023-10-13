import { findProductById } from "./productData.mjs";
import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { addProductToCart } from "./productDetails.mjs";
import { renderHeaderFooter } from "./utils.mjs";

const productId = getParam("product");
productDetails(productId, ".product-detail");

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button`
const addCartButton = document.querySelector("#addToCart")
console.log(addCartButton);
addCartButton.addEventListener("click", addToCartHandler);

renderHeaderFooter()