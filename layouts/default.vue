<script setup>
import { ref } from 'vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

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

<style lang="scss">

</style>
