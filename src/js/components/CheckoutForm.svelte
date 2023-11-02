

<script>

    import { getLocalStorage, formDataToJson } from "../utils/";
    // props
    export let key = "";

    let tax = 0;

    let estimate = 0;
    let shipping = 10;
    let total = 0;
    let subtotal = 0;
    let quantity = 0;
    let taxRate = 0.06;
    let items = [];

    function init() {
        items = getLocalStorage(key);
        calculateItemSummary();
    }

    function calculateItemSummary() {
            items.forEach(element => {
                subtotal += element.FinalPrice * element.Quantity;
                tax += element.FinalPrice * element.Quantity * taxRate;
                shipping += (element.Quantity * 2) -2;
                total += (element.FinalPrice * element.Quantity) + shipping + tax;
            })

        tax = Math.round(tax * 100) / 100;
    }

    init();

    
// takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
function packageItems(items) {
// convert the list of products from localStorage to the simpler form required for the checkout process. Array.map would be perfect for this.
// remember that the items in localStorage are in the form of {product: {}, quantity: 1}
    const simpleItems = items.map(item => {
        console.log(item);
        return {
            id: item.Id,
            name: item.Name,
            price: item.FinalPrice,
            quantity: item.Quantity,
        };
    });
    return simpleItems;
}

const handleSubmit = async function(event) {
  // build the data object from the calculated fields, the items in the cart, and the information entered into the form
  // remember that the form that was submitted can be found two ways...this or e.target 
  // call the checkout method in our externalServices module and send it our data object.

  const jsonData = formDataToJson(this);

  jsonData.orderDate = new Date();
  jsonData.orderTotal = orderTotal;
  jsonData.tax = tax;
  jsonData.shipping = shipping;
  jsonData.items = packageItems(items);
  console.log(jsonData);
  try {
    const response = await checkout(jsonData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }

};


</script>

<form name="checkout" on:submit|preventDefault={handleSubmit}> 

    <fieldset class="shipping-summary">
        <legend>Shipping</legend>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" placeholder="John" required />
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" placeholder="Doe" required />
        <label for="street" class="street">Street Address</label>
        <input type="text" id="street" name="street" placeholder="1234 Main St" required />
        <label for="city">City</label>
        <input type="text" id="city" name="city" placeholder="Anytown" required />
        <label for="state">State</label>
        <input type="text" id="state" name="state" placeholder="CA" required />
        <label for="zip">Zip Code</label>
        <input type="text" id="zip" name="zip" placeholder="12345" required />
    </fieldset>
    
    <fieldset class="payment-summary">
        <legend>Payment</legend>
        <label for="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
        <label for="expiration">Expiration Date</label>
        <input type="text" id="expiration" name="expiration" placeholder="MM/YY" required />
        <label for="code">CVV</label>
        <input type="text" id="code" name="code" placeholder="123" required />
    </fieldset>
    
    <fieldset class="checkout-summary">
        <legend>Order Summary</legend>
        <ul>
            <li>Item Subtotal({quantity}) ${subtotal}</li>
            <li>Shipping Estimate: ${shipping}</li>
            <li>Tax ${tax}</li>
            <li>Order Total ${total}</li>
        </ul>
    </fieldset>
    <button id="checkoutSubmit" type="submit">Checkout</button>
</form>