<script>
import { getData } from "../externalServices.mjs"
import ProductSummary from "./ProductSummary.svelte";
import { onMount } from 'svelte';
import { createBreadcrumb } from "../utils.mjs"

export let category;
let products = [];

let promise = getData(category);
  onMount(async () => {
    products = await promise;
    createBreadcrumb(category, products.length);
  });

</script>

<h2>Top Product: {category}</h2>
        {#await promise}
            <p>Loading</p>
        {:then products}
        <ul class="product-list">
        {#each products as product}
          <li class="product-card">
            <ProductSummary productCard={product}/>
          </li>
          {/each}
        </ul>
        {/await}

<p>Top products: {category}</p>