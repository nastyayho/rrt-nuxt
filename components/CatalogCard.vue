<script setup>
defineProps({
    item: Array,
});
</script>

<template>
    <div class="card">
        <NuxtLink class="card__inner" :to="`/catalog/${item.id}`">
            <img class="card__img" :src=item.image alt="Car" />
            <div class="card__title">{{ item.title }}</div>
            <div class="card__description">{{ item.description }}</div>
            <div class="card__price">{{ item.price }} $</div>
            <div class="card__rating">{{ item.rating.rate }}</div>
            <button class="card__favorite">like</button>
        </NuxtLink>
    </div>

</template>

<style lang="scss" scoped>
.card {
    margin-top: 20px;
    padding: 0 10px;
    width: 25%;
    
    &__inner {
        display: block;
        padding: 10px;
        width: 100%;
        height: 100%;
        position: relative;
        border: 1px solid $color-grey-02;
        border-radius: 4px;
        transition: $transition;

        @include hovers {
            border: 1px solid $color-green-05;
            background-color: $color-grey-03;
        }
    }

    &__img {
        margin: 0 auto;
        height: 200px;
    }

    &__title {
        margin-top: 10px;
        font-size: 18px;
        font-family: $ff-bold;
    } 

    &__description {
        margin-top: 10px;
        font-size: 14px;
        color: $color-grey-08;
    } 

    &__price {
        margin-top: 12px;
        font-size: 24px;
        font-family: $ff-bold;
    } 

    &__rating {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 1;
        padding: 5px;
        border-radius: 50%;
        background: $color-white-true;
        font-size: 12px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    } 

    &__favorite {
        margin-top: 10px;
    }
}
</style>
