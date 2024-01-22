<script setup>

</script>

<template>
    <h1>About</h1>
    <button>Открыть</button>
    <img src="/img/logo.svg" alt="Discover Nuxt 3" />
</template>

<style lang="scss" scoped>
h1 {
    margin-top: 20px;
    font-size: 36px;
    line-height: 36px;
    color: $color-red-01;
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

</style>
