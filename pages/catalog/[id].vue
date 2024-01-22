<script setup>
    const { id } = useRoute().params;
</script>

<template>
    <h1>Catalog / Car - {{ id }}</h1>
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
