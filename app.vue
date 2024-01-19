<script setup>

</script>

<template>
    <h1>Привет</h1>
    <button>Открыть</button>
    <img src="/img/emoji-1.png" alt="Discover Nuxt 3" />
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
</style>
