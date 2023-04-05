<template>
    <div class="card" :style="{ opacity: soldOut ? '0.5' : '1' }">
        <img :src="image" class="card-img-top" :alt="title" @click="showModal = true">
        <div class="card-body" @click="showModal = true">
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-subtitle">{{ author }}</h6>
        </div>
        <div class="card-bottom">
            <div class="prices d-flex flex-column">
                <span v-if="!soldOut" class="old-price">{{ oldPrice }}</span>
                <span v-if="!soldOut" class="new-price">{{ newPrice }}</span>
                <span v-if="soldOut" class="sold-out-text">Продана на аукционе</span>
            </div>
            <div v-if="!soldOut" class="btn">
                <button v-on:click="addToCart(id)" class="btn-item" ref="cardButton">
                    {{ buttonText }}
                </button>
            </div>
        </div>
        <ModalWindow :showModal="showModal" :title="title" :price="newPrice" :description="author"
            :modalImages="[image, image, image]" :soldOut="soldOut" @close="showModal = false" />
    </div>
</template>
<script>
import ModalWindow from "@/ModalWindow/ModalWindow.vue"

export default {
    name: "CardItem",
    components: {
        ModalWindow,
    },
    props: {
        image: String,
        title: String,
        author: String,
        oldPrice: String,
        newPrice: String,
        soldOut: {
            type: Boolean,
            default: false,
        },
        images: {
            type: Array,
            default: () => [],
        },
        id: String,
    },
    data() {
        return {
            buttonText: "Купить",
            processingText: "Обработка",
            isProcessing: false,
            showModal: false,
            modalImages: [this.image, this.image, this.image],
        };
    },

    mounted() {
        const buttonState = localStorage.getItem(`buttonState_${this.id}`);
        if (buttonState === 'В корзине') {
            this.buttonText = 'В корзине';
            this.$refs.cardButton.classList.add('add-to-card-btn');
        } else {
            this.buttonText = 'Купить';
            if (this.$refs.cardButton) {
                this.$refs.cardButton.classList.remove('add-to-card-btn');
            }
        }
    },


    methods: {
        addToCart(id) {

            if (this.isProcessing) {
                return;
            }

            this.isProcessing = true;
            const currentButtonText = this.buttonText;
            this.buttonText = this.processingText;
            this.$refs.cardButton.classList.add('processing-btn')
            this.$refs.cardButton.classList.remove('add-to-card-btn');

            setTimeout(() => {
                if (currentButtonText === "Купить") {
                    this.buttonText = "В корзине"
                    this.$refs.cardButton.classList.remove('processing-btn');
                    this.$refs.cardButton.classList.add('add-to-card-btn')
                    localStorage.setItem(`buttonState_${id}`, "В корзине");
                }

                if (currentButtonText === "В корзине") {
                    this.buttonText = "Купить"
                    this.$refs.cardButton.classList.remove('processing-btn');
                    this.$refs.cardButton.classList.remove('add-to-card-btn')
                    localStorage.removeItem(`buttonState_${id}`);
                }

                this.isProcessing = false;

            }, 2000)
        },
    },

};
</script> 


<style scoped>
.card {
    width: 22%;
    border: none;
    margin-bottom: 320px;
    padding: 0;
    border: 1px solid #E1E1E1;
}

.card-body {
    padding: 16px 36px 16px 24px;
}

.card-title {
    font-weight: 400;
    font-size: 18px;
    color: #343030;
}

.card-subtitle {
    font-weight: 400;
    font-size: 18px;
    color: #343030;
}

.card-img-top {
    height: 160px;
}

.card-bottom {
    display: flex;
    padding-bottom: 24px;
    flex-wrap: wrap;
}

.prices {
    justify-content: center;
    align-items: center;
    margin-right: 21px;
    padding-left: 24px;
}

.old-price {
    display: block;
    text-decoration: line-through;
    color: #a0a0a0;
}

.new-price {
    color: #343030;
}

.btn {
    width: 42%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-right: 24px;
    white-space: nowrap;
}

.btn-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 14px 25px;
    border: none;
    background-color: #382E2B;
    color: white;
}

.add-to-card-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    background: #5B3A32;
    color: white;
}

.add-to-card-btn::before {
    content: '\2713';
    display: inline-flex;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-right: 7px;
    color: #F4F6F9;
}

.btn-item:hover {
    background-color: #574742;
    color: white;
}

.processing-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    background: #ee3000;
    color: white;
}

.processing-btn:hover {
    background: #ee3000;
}

.sold-out {
    opacity: 50%;
}

.sold-out-text {
    display: block;
    margin-top: 20px;
    width: 100%;
    font-weight: 700;
    color: #343030;
}
</style>