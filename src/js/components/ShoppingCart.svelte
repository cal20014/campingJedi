<script>
  import { getLocalStorage, setLocalStorage } from "../utils.mjs";

  let cartItems = getLocalStorage("so-cart") || [];
  let total = 0;
  let itemCount = 0;

  // Calculate total when cartItems changes
  $: if (cartItems.length > 0) {
    total = cartItems.reduce((acc, item) => acc + (item.FinalPrice * item.Quantity), 0);
    itemCount = cartItems.reduce((acc, item) => acc + item.Quantity, 0);
  }

  function removeItemFromCart(id) {
    const itemIndex = cartItems.findIndex(item => item.Id === id);

    if (itemIndex !== -1) {
      if (cartItems[itemIndex].Quantity > 1) {
        // Decrement the quantity if more than one
        cartItems[itemIndex].Quantity -= 1;
      } else {
        // Remove the item from the cart if only one left
        cartItems = [
          ...cartItems.slice(0, itemIndex),
          ...cartItems.slice(itemIndex + 1)
        ];
      }
      // Update the cart in local storage and trigger a component update
      setLocalStorage("so-cart", cartItems);
    }
  }

  function handleCheckout() {
    // Implement checkout functionality
    console.log("Proceeding to checkout...");
    // You might navigate to a new page or handle payment processing here
  }
</script>

<style>
  .cart-card__remove {
    background-color: #d9534f;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .cart-list {
    list-style-type: none;
    padding: 0;
  }

  .cart-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .cart-card__image img {
    width: 50px; /* Adjust as necessary */
    height: auto;
  }

  .cart-footer {
    display: none; /* Hidden by default */
    padding: 15px 0;
    text-align: right;
  }

  .cart-footer.show {
    display: block; /* Shown when items are in cart */
  }

  .checkout-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }

  .cart-total {
    margin-right: 15px; /* Space between total and button */
    font-size: 1.2rem;
    display: inline; /* Align with button */
  }
</style>

<h2>My Cart</h2>

{#if cartItems.length > 0}
  <ul class="cart-list">
    {#each cartItems as item (item.Id)}
      <li class="cart-card">
        <div>
          <a
            href="/product_pages/index.html?productid={item.Id}"
            class="cart-card__image"
          >
            <img src={item.Images.PrimaryMedium} alt={item.Name} />
          </a>
          <div>
            <a href="../product_pages/index.html?product={item.Id}">
              <h2 class="card__name">{item.Name}</h2>
            </a>
            <p class="cart-card__color">{item.Colors[0].ColorName}</p>
            <p class="cart-card__quantity">Quantity: {item.Quantity}</p>
            <p class="cart-card__price">${item.FinalPrice}</p>
          </div>
        </div>
        <button class="cart-card__remove" on:click={() => removeItemFromCart(item.Id)}>
          Remove
        </button>
      </li>
    {/each}
    <div class="cart-footer show">
      <p class="item-count">Total Items: {itemCount}</p>
      <p class="cart-total">Total: ${total.toFixed(2)}</p>
      <button class="checkout-button" on:click={handleCheckout}>Checkout</button>
    </div>
  </ul>
{:else}
  <p class="empty-cart-message">Your cart is empty</p>
{/if}
