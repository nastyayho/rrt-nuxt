<script setup>

</script>

<template>
    <div class="car">
        <h1 class="car__title">Catalog / Car</h1>
        <img src="/img/logo.svg" alt="Discover Nuxt 3">
    </div>
</template>

<style lang="scss">

.car {
    &__title {
        margin-top: 20px;
    font-size: 36px;
    line-height: 36px;
    color: $color-blue;
    font-family: $ff-reg;
    }

    img {
        margin-top: 20px;
        margin-bottom: 20px;
        display: block;
    }
}
</style>
