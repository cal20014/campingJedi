<script>
import { getProductsByCategory } from "../externalServices.mjs"
import ProductSummary from "./ProductSummary.svelte";

export let category;

let promise = getProductsByCategory(category);

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