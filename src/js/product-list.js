import ProductList from "./components/ProductList.svelte";
import { renderHeaderFooter, getParam } from "./utils.mjs";

renderHeaderFooter();

const productCategory = getParam("category");

new ProductList({
  target: document.querySelector(".products"),
  props: { category: productCategory },
});
