<script setup>
defineProps({
    customClass: {
        type: String,
        default: null,
    },
    buttonText: {
        type: String,
        default: '',
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    iconClass: {
        type: String,
        default: null,
    },
    rightIcon: {
        type: Boolean,
        default: false,
    },
});


</script>

<template>
    <button
        class="btn"
        :class="[customClass, { 'btn_icon-only': !buttonText && iconClass }]"
        :disabled="isDisabled"
    >
        <span
            v-if="!rightIcon && iconClass"
            class="btn__icon"
            :class="iconClass"
        ></span>
        <span v-if="buttonText">{{ buttonText }}</span>
        <span
            v-if="rightIcon && iconClass"
            class="btn__icon"
            :class="iconClass"
        ></span>
    </button>
</template>

<style lang="scss" scoped>
.btn {
    padding: 11px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $ff-reg;
    font-size: 16px;
    line-height: 22px;
    outline: none;
    border-radius: 8px;
    transition: $transition;
    @include no-selection;

    &.btn_primary {
        border: 0;
        color: $c-text-white;
        background: $c-btn-primary;

        @include hovers {
            background: $c-btn-primary-h;
        }

        &:active {
            background: $c-btn-primary-a;
        }
    }

    &.btn_dark {
        border: 0;
        color: $c-text-white;
        background: $c-btn-dark;

        @include hovers {
            background: $c-btn-dark-h;
        }

        &:active {
            background: $c-btn-dark-a;
        }
    }

    &.btn_outline-primary {
        border: 1px solid $c-btn-primary;
        color: $c-btn-primary;
        background: transparent;

        @include hovers {
            color: $c-text-white;
            background: $c-btn-primary-h;
        }

        &:active {
            background: $c-btn-primary-a;
        }
    }

    &.btn_outline-light {
        border: 1px solid $c-btn-light;
        color: $c-btn-light;
        background: transparent;

        @include hovers {
            color: $c-text-main;
            background: $c-btn-light;
        }

        &:active {
            color: $c-btn-light-text-a;
            background: $c-btn-light;
        }

        &:disabled,
        &._disabled {
            opacity: 0.25;
        }
    }

    &.btn_outline-dark {
        border: 1px solid $c-btn-dark;
        color: $c-btn-dark;
        background: transparent;

        @include hovers {
            color: $c-btn-light;
            background: $c-btn-dark;
        }

        &:active {
            color: $c-btn-light;
            background: $c-btn-dark-a;
        }
    }

    &:disabled,
    &._disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    &_icon-only {
       padding: 14px; 
    }

    span {
        &:last-child {
            margin-left: 10px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
}
</style>
