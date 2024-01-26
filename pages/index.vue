<script setup>
import { useCounterStore } from '~/stores/myStore';

definePageMeta({
    layout: 'main',
});

// test store
const store = useCounterStore();
const { name, doubleCount } = store;

const response = await $fetch('/api/hello');
console.log(response);

useHead({
    // title: 'My title',
    meta: [{ name: 'description', content: 'My description' }],
    bodyAttrs: {
        class: 'test',
    },
});

useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <div class="index">
        <h1>INDEX</h1>
        <h2>test pinia {{ name }} {{ doubleCount }}</h2>
        <button>Открыть</button>
        <img src="/img/logo.svg" alt="Discover Nuxt 3">
    </div>
</template>

<style lang="scss">
.index {
    h1 {
        margin-top: 20px;
        font-size: 36px;
        line-height: 36px;
        color: $color-green;
        font-family: $ff-reg;
    }

    button {
        margin-top: 20px;

        @include hovers {
            background-color: $color-black-true;
            color: $color-white-true;
            transition: $transition;
        }
    }

    img {
        margin-top: 20px;
        margin-bottom: 20px;
        display: block;
    }
}
</style>
