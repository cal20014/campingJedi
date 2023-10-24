
import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`
}         

function renderList(list, selectEl) {
    const htmlStrings = list.map(productCardTemplate);
    console.log(selectEl);
    selectEl.insertAdjacentHTML('afterbegin', htmlStrings.join()); //The join() method returns an array as a string and does not change the original array.
}

export default async function productList(selector, category) {
    
    // get the element we will insert the list into from the selector
    let selectEl = document.querySelector(selector);
    // get the list of products 
    console.log("asdf");
    let products = await getData(category);//without async, await will show an error. 
    console.log(products[0]);
    // renderList(products, selectEl);
    renderListWithTemplate(productCardTemplate, selectEl, products);
    // render out the product list to the element
    //renderList (selectEl, products);
}