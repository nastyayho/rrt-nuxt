<script setup>
import { ref } from 'vue';

const title = ref('test title');

useHead({
    titleTemplate: () => `rrt ${title.value}`,
    meta: [{ name: 'description', content: 'My amazing site.' }],
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
    <main class="l-main">
        <Header />
        <div class="container">
            <slot />
        </div>
        <Footer />
    </main>
</template>

<style lang="scss" scoped>

</style>
