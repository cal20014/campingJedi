// import ExternalServices from './externalServices.js';
// import ProductList from './productList.js';
//import { loadHeaderFooter } from './utils.mjs';
import ProductList from "./components/ProductList.svelte"

new ProductList({
    target: document.querySelector(".products"),
    props: { category: "tents" },
})

//loadHeaderFooter();

// const dataSource = new ExternalServices('tents');
// let element = document.querySelector('.product-list');
// const productList = new ProductList('tents', dataSource, element);
// productList.init()
// console.log(productList);