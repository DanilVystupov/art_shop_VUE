<template>
    <div class="container p-0">
        <div class="body_title mt-5 mb-5">Картины эпохи Возрождения</div>
        <div class="row d-flex justify-content-between m-0">
            <CardItem v-for="item in filteredItems" :key="item.id" :image="item.image" :title="item.title"
                :author="item.author" :old-price="item.oldPrice" :id="item.id.toString()" :new-price="item.newPrice"
                :soldOut="item.soldOut" v-bind:class="{ 'sold-out': item.soldOut }">
            </CardItem>
            <div v-if="showErrorMessage" class="error_message">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import CardItem from "@/CardItem/CardItem.vue";

export default {
    name: "BodyComponent",
    components: { CardItem },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            searchTerm: "",
        };
    },
    computed: {
        filteredItems() {
            const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
            return this.items.filter((item) =>
                item.title.toLowerCase().includes(lowerCaseSearchTerm)
            );
        },
        errorMessage() {
            return "Ничего не найдено";
        },
        showErrorMessage() {
            return this.filteredItems.length === 0 && this.searchTerm !== "";
        },
    },
};
</script>

<style scoped>
.body_title {
    font-weight: 700;
    font-size: 24px;
    color: #343030;
}

.error_message {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: rgb(222, 23, 23);
    margin-top: auto;
}
</style>
