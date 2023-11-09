<script>
import { onMount } from 'svelte'
import { getData } from "../externalServices.mjs"
import ProductSummary from "./ProductSummary.svelte";

export let category;
let products = []
let defaultOrderProducts = []

async function init (){
  products = await getData(category);
  defaultOrderProducts = products
}

function sortAscending(){
  products = [...products].sort((productA, productB) => productA.ListPrice - productB.ListPrice)
}

function sortDescending(){
  products = [...products].sort((productA, productB) => productB.ListPrice - productA.ListPrice)
}

function sortAlpha(){
  products = [...products].sort((productA, productB) => productA.Name.localeCompare(productB.Name))
}

let selectedOption = "default";

function handleOptionChange(event) {
  selectedOption = event.target.value;

  // Call a function based on the selected option
  if (selectedOption === "ascending") {
    sortAscending();
  } else if (selectedOption === "descending") {
    sortDescending();
  } else if (selectedOption === "alphabetical"){
    sortAlpha();
  }else{
    products = defaultOrderProducts
  }
}

onMount(init)


</script>

<h2>Top Product: {category}</h2>
        <!-- {#await promise}
            <p>Loading</p>
        {:then products} -->
        <select on:change={handleOptionChange} bind:value={selectedOption}>
          <option value="default">Order by: featured</option>
          <option value="ascending">Price: Low to High</option>
          <option value="descending">Price: High to Low</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
        <ul class="product-list">
      
        {#each products as product}
          <li class="product-card">
            <ProductSummary productCard={product}/>
          </li>
          {/each}
        </ul>
        <!-- {/await} -->

<p>Top products: {category}</p>