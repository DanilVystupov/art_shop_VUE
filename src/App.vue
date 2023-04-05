<template>
    <div id="app">
        <HeaderComponent @search="handleSearch" />
        <BodyComponent :items="filteredItems" />
        <FooterComponent />
    </div>
</template>
  
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import './styles.css';

export default {
    name: "App",
    components: {
        HeaderComponent,
        BodyComponent,
        FooterComponent
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    image: require('@/images/card1.png'),
                    title: "«Рождение Венеры»",
                    author: "Сандро Боттичелли",
                    oldPrice: "2 000 000 $",
                    newPrice: "1 000 000 $",
                    soldOut: false,
                },
                {
                    id: 2,
                    image: require('@/images/card2.png'),
                    title: "«Тайная вечеря»",
                    author: "Леонардо да Винчи",
                    oldPrice: "",
                    newPrice: "3 000 000 $",
                    soldOut: false,
                },
                {
                    id: 3,
                    image: require('@/images/card3.png'),
                    title: "«Сотворение Адама»",
                    author: "Микеланджело",
                    oldPrice: '6 000 000 $',
                    newPrice: '5 000 000 $',
                    soldOut: false,
                },
                {
                    id: 4,
                    image: require('@/images/card4.png'),
                    title: "«Урок анатомии»",
                    author: "Рембрандт",
                    soldOut: true,
                },
            ],
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
    },
    methods: {
        handleSearch(searchTerm) {
            this.searchTerm = searchTerm;
        },
    },
};
</script>
  
<style></style>