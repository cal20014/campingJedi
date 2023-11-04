<!-- <script>
  import { getLocalStorage, setLocalStorage } from "../utils.mjs";

  let cartItems = getLocalStorage("so-cart") || [];

  function removeItemFromCart(id) {
    cartItems = cartItems.filter((item) => item.Id !== id);
    setLocalStorage("so-cart", cartItems);
  }
</script>

<h2>My Cart</h2>

{#if cartItems.length > 0}
  <ul class="cart-list">
    {#each cartItems as item (item.Id)}
      <li class="cart-card divider">
        Cart item template -->
        <!-- <button class="cart-card__remove" on:click={() => removeItemFromCart(item.Id)}>
          Remove
        </button>
      </li>
    {/each}
  </ul>
{:else}
  <p class="empty-cart-message">Your cart is empty</p>
{/if} -->




<!-- <script>
    import { getLocalStorage } from "../utils.mjs";

    function renderCartContents() {
      const cartItems = getLocalStorage("so-cart");
      const productList = document.querySelector(".product-list");
      if (cartItems !== null) {
        const htmlItems = cartItems.map((item) => cartItemTemplate(item));
        productList.innerHTML = htmlItems.join("");
      } else {
        productList.innerHTML = `<p class="empty-cart-message">Your cart is empty</p>`;
      }
    }

    function removeItemFromCart(id) {
      let cart = getLocalStorage("so-cart");
      cart = cart.filter((item) => item.Id !== id);
      setLocalStorage("so-cart", cart);
      renderCartContents();
    }

    document
      .querySelector(".product-list")
      .addEventListener("click", function (event) {
        if (event.target.classList.contains("cart-card__remove")) {
          const itemId = event.target.dataset.id;
          removeItemFromCart(itemId);
        }
      });

    renderCartContents();
    renderHeaderFooter();

  </script>
  
  <h2>My Cart!</h2>
  
  <ul class="product-list">
    {#each cartItems as item}
      <li class="cart-card divider">
        <a
          href="/product_pages/index.html?productid={item.Id}"
          class="cart-card__image"
        >
          <img src={item.Image} alt={item.Name} />
        </a>
        <a href="#">
          <h2 class="card__name">{item.Name}</h2>
        </a>
        <p class="cart-card__color">{item.Colors[0].ColorName}</p>
        <p class="cart-card__quantity">qty: {item.quantity}</p>
        <p class="cart-card__price">${item.FinalPrice}</p>
      </li>
    {/each}
  </ul> -->