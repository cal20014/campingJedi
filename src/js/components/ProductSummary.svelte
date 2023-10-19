<script>
    export let productCard;
</script>


<a href="../product_pages/index.html?product={productCard.Id}">
    <img
      src={ productCard.Images.PrimaryMedium }
      alt="{ productCard.Brand.Name } || { productCard.Name }"
    />
    <h3 class="card__brand">{ productCard.Brand.Name }</h3>
    <h2 class="card__name">{ productCard.Name}</h2>
    <p class="product-card__price">{ productCard.ListPrice}</p></a>