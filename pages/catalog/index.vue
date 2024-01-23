<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products');
// console.log(toRaw(products.value));

</script>

<template>
    <h1>Catalog</h1>
    <div class="catalog-cards">
        <CatalogCard
            v-for="item in products"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<style lang="scss" scoped>
h1 {
    margin-top: 20px;
    font-size: 36px;
    line-height: 36px;
    color: $color-blue;
    font-family: $ff-reg;
}

.catalog-cards {
    margin: 20px -10px 20px;
    display: flex;
    flex-wrap: wrap;
}
</style>
