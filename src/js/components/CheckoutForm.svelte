

<script>

    import { getLocalStorage } from "../utils/";
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

</script>

<fieldset class="shipping-summary">
    <legend>Shipping</legend>
    <label for="name">First Name</label>
    <input type="text" id="name" name="name" placeholder="John" required />
    <label for="name">Last Name</label>
    <input type="text" id="name" name="name" placeholder="Doe" required />
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
    <label for="card">Card Number</label>
    <input type="text" id="card" name="card" placeholder="1234 5678 9012 3456" required />
    <label for="exp">Expiration Date</label>
    <input type="text" id="exp" name="exp" placeholder="MM/YY" required />
    <label for="cvv">CVV</label>
    <input type="text" id="cvv" name="cvv" placeholder="123" required />
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