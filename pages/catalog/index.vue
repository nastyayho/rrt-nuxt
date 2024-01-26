<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products');
// const productsArray = Array.isArray(products) ? products : [products];
// console.log(productsArray);
// console.log(toRaw(products.value));
</script>

<template>
    <div class="catalog">
        <h1 class="catalog__title">Catalog</h1>
        <div class="catalog__cards">
            <CatalogCard 
                v-for="item in products" 
                :key="item.id" 
                :item="item" 
            />
        </div>
    </div>
</template>

<style lang="scss">
.catalog {
    &__title {
        margin-top: 20px;
        font-size: 36px;
        line-height: 36px;
        color: $color-blue;
        font-family: $ff-reg;
    }
    &__cards {
        margin: 20px -10px 20px;
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
