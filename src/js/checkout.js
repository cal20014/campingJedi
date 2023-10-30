import { renderHeaderFooter } from "./utils.mjs";
import CheckoutForm from "./components/CheckoutForm.svelte";

renderHeaderFooter();

new CheckoutForm({
  target: document.querySelector("#checkoutForm"),
  props: { key: "so-cart" },
});
