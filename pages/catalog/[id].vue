<script setup>
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(uri, { key: id });
console.log(product.value.description);

if (!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
        fatal: true,
    });
}

useHead({
    title: product.value.title,
    meta: [{ name: 'description', content: product.value.description }],
    // bodyAttrs: {
    //     class: 'car',
    // },
});
</script>

<template>
    <h1>Catalog / Car - {{ id }}</h1>
    <div>{{ product.title }}</div>
</template>

<style lang="scss" scoped>
h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 36px;
    color: $color-blue;
    font-family: $ff-reg;
}
</style>
