import ShoppingCart from "./components/ShoppingCart.svelte";
import { renderHeaderFooter } from "./utils.mjs";

renderHeaderFooter();

new ShoppingCart({
  target: document.querySelector(".cart"),
});
