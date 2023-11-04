import { findProductById } from "./externalServices.mjs";
import { renderHeaderFooter, getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { addProductToCart } from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId, ".product-detail");

// add to cart button event handler
async function addToCartHandler(event) {
  const product = await findProductById(event.target.dataset.id);
  addProductToCart(product);
}

setTimeout(() => {
  const addCartButton = document.querySelector("#addToCart");
  console.log(addCartButton);
  if (addCartButton) {
    addCartButton.addEventListener("click", addToCartHandler);
  }
}, 1000); // delays for 5 seconds

renderHeaderFooter();
