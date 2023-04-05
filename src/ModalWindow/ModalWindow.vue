<template>
    <div class="modal" v-if="showModal && !soldOut">
        <div class="modal__overlay" @click="$emit('close')"></div>
        <div class="modal__body">
            <div class=" modal__header">
                <h2 class="modal__title">{{ title }}</h2>
                <p class="modal__price">Цена: {{ price }}</p>
                <button class="modal__close" @click="$emit('close')">X</button>
            </div>
            <div class="modal__content">
                <div class="modal__carousel">
                    <carousel :perPage="1" :navigationEnabled="true">
                        <slide v-for="(image, index) in modalImages" :key="index">
                            <img class="modal_image" :src="image" :alt="title">
                        </slide>
                    </carousel>
                </div>
                <div class="modal__description">Автор картины: {{ description }}</div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'ModalWindow',
    components: {
        Carousel,
        Slide
    },
    props: {
        showModal: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            required: true
        },
        modalImages: {
            type: Array,
            required: true
        },
        soldOut: {
            type: Boolean,
            required: true,
        },
    }
};
</script>
  
<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal__body {
    position: relative;
    max-width: 80%;
    max-height: 80%;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
}

.modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #e9e9e9;
}

.modal__title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.modal__price {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
}

.modal__close {
    font-size: 24px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
}

.modal__content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
}

.modal__carousel {
    height: 70%;
    margin-bottom: 20px;
}

.modal_image {
    display: flex;
    margin: 0 auto;
    width: 50%;
}

.modal__description {
    opacity: 1;
    flex-grow: 1;
    font-size: 20px;
}
</style>