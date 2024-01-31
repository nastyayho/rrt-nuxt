<script setup>
import MainButton from '@/components/UI/MainButton.vue';

defineProps({});
const handleClick = () => {
    alert('hi');
};
</script>

<template>
    <div class="ui__line">
        <div class="ui__small-title">Класс: <em>btn_primary</em></div>
        <MainButton
            customClass="btn_primary"
            buttonText="Только текст"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_primary"
            buttonText="С иконкой слева"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_primary"
            buttonText="С иконкой справа"
            iconClass="icon-no-icon"
            :rightIcon="true"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_primary"
            :isDisabled="true"
            buttonText="Задизейбленная"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_primary"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_primary"
            buttonText="Загрузка... (на уточнении)"
            :isLoading="true"
            @click="handleClick"
        />
    </div>
    <div class="ui__line">
        <div class="ui__small-title">Класс: <em>btn_dark</em></div>
        <MainButton
            customClass="btn_dark"
            buttonText="Только текст"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_dark"
            buttonText="С иконкой слева"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_dark"
            buttonText="С иконкой справа"
            iconClass="icon-no-icon"
            :rightIcon="true"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_dark"
            :isDisabled="true"
            buttonText="Задизейбленная"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_dark"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
    </div>
    <div class="ui__line">
        <div class="ui__small-title">Класс: <em>btn_outline-primary</em></div>
        <MainButton
            customClass="btn_outline-primary"
            buttonText="Только текст"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-primary"
            buttonText="С иконкой слева"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-primary"
            buttonText="С иконкой справа"
            iconClass="icon-no-icon"
            :rightIcon="true"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-primary"
            :isDisabled="true"
            buttonText="Задизейбленная"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-primary"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
    </div>
    <div class="ui__line ui__line_bg">
        <div class="ui__small-title">Класс: <em>btn_outline-light</em></div>
        <MainButton
            customClass="btn_outline-light"
            buttonText="Только текст"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-light"
            buttonText="С иконкой слева"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-light"
            buttonText="С иконкой справа"
            iconClass="icon-no-icon"
            :rightIcon="true"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-light"
            :isDisabled="true"
            buttonText="Задизейбленная"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-light"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
    </div>
    <div class="ui__line">
        <div class="ui__small-title">Класс: <em>btn_outline-dark</em></div>
        <MainButton
            customClass="btn_outline-dark"
            buttonText="Только текст"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-dark"
            buttonText="С иконкой слева"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-dark"
            buttonText="С иконкой справа"
            iconClass="icon-no-icon"
            :rightIcon="true"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-dark"
            :isDisabled="true"
            buttonText="Задизейбленная"
            @click="handleClick"
        />
        <MainButton
            customClass="btn_outline-dark"
            iconClass="icon-no-icon"
            @click="handleClick"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>
