<script>
    export let productCard;

    console.log(productCard.DescriptionHtmlSimple);

  let showModal = false; // A variable to control the visibility of the modal

  // Function to show the modal
  function show() {
    showModal = true;
  }

  // Function to hide the modal
  function hide() {
    showModal = false;
  }

</script>


<a href="../product_pages/index.html?product={productCard.Id}">
  <img
    src={ productCard.Images.PrimaryMedium }
    alt="{ productCard.Brand.Name } || { productCard.Name }"
  />
  <h3 class="card__brand">{ productCard.Brand.Name }</h3>
  <h2 class="card__name">{ productCard.Name}</h2>
  <p class="product-card__price">{ productCard.ListPrice}</p></a>
  
{#if !showModal}
  <button class='showBtn' on:click={show}>Show Description</button>
{/if}

{#if showModal}
  <div class="modal">
    {@html productCard.DescriptionHtmlSimple}
    <button class='showBtn' on:click={hide}>Close Description</button>
  </div>
{/if}

<style>

.showBtn{
  font-size: 0.8em;
}

</style>