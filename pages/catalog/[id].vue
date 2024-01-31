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
    bodyAttrs: {
        class: 'car',
    },
});

// useSeoMeta({
//     title: 'My Amazing Site',
//     ogTitle: 'My Amazing Site',
//     description: 'This is my amazing site, let me tell you all about it.',
//     ogDescription: 'This is my amazing site, let me tell you all about it.',
//     ogImage: 'https://example.com/image.png',
//     twitterCard: 'summary_large_image',
// });
</script>

<template>
    <h1 class="detail__title">Catalog / Car - {{ id }}</h1>
    <div>{{ product.title }}</div>
</template>

<style lang="scss" scoped>
.detail__title {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 36px;
    color: $color-blue;
    font-family: $ff-reg;
}
</style>
