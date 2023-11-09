<script>
    import { getData } from "../externalServices.mjs"
    import {getRandomNumbers} from '../utils.mjs'
    import ProductSummary from "./ProductSummary.svelte";

    let randomCategory = ''
    let randomProdcuts = []
    let selcetedRandomProducts = []

    const selectRandomCategory = () => {
        let categories = ['backpacks', 'sleeping-bags', 'tents']

    
    // Generate a random index within the array's length
    const randomIndex = Math.floor(Math.random() * categories.length);

    // Use the random index to access the randomly chosen element
    randomCategory = categories[randomIndex];
    }

    const getRandomProducts = async () => {
        randomProdcuts = await getData(randomCategory)
  

        const randomIndexes = getRandomNumbers(0, randomProdcuts.length - 1, 3)

        randomIndexes.forEach(index => {
            selcetedRandomProducts.push(randomProdcuts[index])
        });

        


    }

    selectRandomCategory()
    getRandomProducts()




</script>

<h2>Suggested Products</h2>
{#if randomProdcuts.length == 0}
  <p>Loading suggested products...</p>
{:else}
  {#each selcetedRandomProducts as product}
    <ProductSummary productCard={product}/>
  {/each}
{/if}

