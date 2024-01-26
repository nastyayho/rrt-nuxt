<script setup>

</script>

<template>
    <div class="about">
        <h1 class="about__title">About</h1>
        <img src="/img/logo.svg" alt="Discover Nuxt 3">
    </div>
</template>

<style lang="scss">
.about {
    &__title {
        margin-top: 20px;
        font-size: 36px;
        line-height: 36px;
        color: $color-red-01;
        font-family: $ff-reg;
    }

    img {
        margin-top: 20px;
    margin-bottom: 20px;
    display: block;
    }
}
</style>
