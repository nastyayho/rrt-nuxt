<script setup>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

defineProps(['error']);

useHead({
    title: 'error page',
    meta: [{ name: 'description', content: 'error page' }],
    bodyAttrs: {
        class: 'error',
    },
});
</script>

<template>
    <main class="l-main">
        <Header />
        <div class="container">
            <div class="error-page">
                <h1 class="error-page__title">{{ error.statusCode }}</h1>
                <div class="error-page__text">Ooooops...</div>
                <div class="error-page__message">{{ error.message }}</div>
            </div>
        </div>
        <Footer />
    </main>
</template>

<style lang="scss">
.error {
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-page {
    text-align: center;

        &__title {
            font-size: 70px;
            line-height: 100%;
            font-family: $ff-bold;
            color: $color-green;
        }

        &__text {
            margin-top: 40px;
            font-size: 30px;
        }

        &__message {
            margin-top: 40px;
            font-size: 20px;
        }
    }
}

</style>
