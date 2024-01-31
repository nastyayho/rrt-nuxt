<script setup>
import BtnsUi from '~/components/utility/BtnsUI.vue';

defineProps({});
</script>

<template>
    <div class="ui">
        <div class="ui__block">
            <div class="ui__title">Заголовки</div>
            <div class="title-h1">Заголовок h1</div>
            <div class="title-h2">Заголовок h2</div>
            <div class="title-h3">Заголовок h3</div>
            <div class="title-h4">Заголовок h4</div>
            <div class="title-h5">Заголовок h5</div>
        </div>
        <div class="ui__block">
            <div class="ui__title">Кнопки (класс <em>btn</em>)</div>
            <BtnsUi />
        </div>
    </div>
</template>

<style lang="scss">
.ui {
    &__block {
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid $color-grey-05;
    }

    &__title {
        color: $color-grey-09;
        font-size: 24px;
        line-height: 30px;
    }

    &__line {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;

        &_bg {
            margin: 0 -10px;
            padding: 10px 10px 20px;
            background: $c-btn-dark;

            .ui__small-title {
                color: white;

                em {
                    color: $color-cyan;
                }
            }
        }

        button {
            margin-right: 20px;
        }
    }

    &__small-title {
        margin-bottom: 10px;
        width: 100%;
        display: block;
        color: $color-grey-09;
        font-size: 18px;
        line-height: 22px;
    }

    em {
        color: $color-toolbox-bcg;
    }
}
</style>
