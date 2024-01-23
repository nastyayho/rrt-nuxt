<script setup>
import { onMounted, ref } from 'vue';

// const items = ref([]);
const title = ref('test title');

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
        <NuxtPage/>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 36px;
    line-height: 36px;
    color: $color-green;
    font-family: $ff-reg;
}

button {
    @include hovers {
        background-color: $color-black-true;
        color: $color-white-true;
        transition: $transition;
    }
}

ul {
    margin-top: 40px;
    padding: 0 40px;

    li {
        margin-bottom: 6px;
        list-style: disc;
    }
}
</style>
