<script setup>
// import { onMounted, ref } from "vue";

// const items = ref([]);

// onMounted(async () => {
//     // тут все то, что нужно для отображения при загрузке страницы
//     try {
//         const { data } = await useFetch('/api/modules');
//         items.value = data;
//     } catch (err) {
//         console.log(err);
//     }
// });

// useHead({
//     // titleTemplate: 'test title',
//     titleTemplate: () => `rrt ${title.value}`,
//     meta: [{ name: 'description', content: 'My amazing site.' }],
//     bodyAttrs: {
//         class: 'test',
//     },
// });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
</style>
