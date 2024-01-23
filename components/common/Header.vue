<script setup>
import { onMounted } from 'vue';

defineProps({
   
});

const route = useRoute();

const links = [
    { label: 'Home', to: '/' },
    { label: 'Catalog', to: '/catalog' },
    { label: 'About', to: '/about' },
    { label: 'Car', to: '/catalog/car' },
];

onMounted(() => {
});

</script>

<template>
    <header>
        <nav>
            <NuxtLink
                v-for="link of links"
                :key="link.label"
                :to="link.to"
                exact
            >{{ link.label }}</NuxtLink>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 10px;
    background: $color-green-01;
}

nav {
    display: flex;
    width: 100%;
}

a {
    margin: 0 10px;
    padding: 5px 10px;
    background: $color-grey-04;
    border-radius: 4px;

    @include hovers {
        background: $color-grey-06;
        transition: $transition;
    }

    &.router-link-active {
        background: $color-toolbox-bcg;
        color: $color-white-true;
    }
}
</style>
