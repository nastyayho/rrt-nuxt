<script setup>
  import { onMounted, ref } from 'vue';
  const items = ref([]);
  
  onMounted(async () => {
    // тут все то, что нужно для отображения при загрузке страницы
    try {
      const { data } = await useFetch('/api/modules');
      items.value = data;
    } catch (err) {
      console.log(err);
    }


  });
</script>

<template>
    <h1>Привет</h1>
    <button>Открыть</button>
    <img src="/img/emoji-1.png" alt="Discover Nuxt 3" />
    <ul>
      {# <li 
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      >dsaad</li> #}
      <li>dasdada</li>
      <li>dasdada</li>
      <li>dasdada</li>
      <li>dasdada</li>
    </ul>
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
