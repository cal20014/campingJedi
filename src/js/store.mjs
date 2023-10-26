import { writable } from "./components/ShoppingCart.svelte";
import { getCartCount } from "./utils.mjs";

export const cartCount = writable(getCartCount());
