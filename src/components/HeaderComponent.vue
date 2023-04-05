<template>
    <div class="border-bottom">
        <div class="container p-0">
            <div class="navbar navbar-expand-md bg-white pt-4 pb-4">
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <navigation-link></navigation-link>
                    <form class="search-item">
                        <input class="form-control rounded-0" type="search" placeholder="Поиск по названию картины"
                            aria-label="search" v-model="searchTerm" @input="handleInput" />
                        <button class="btn-search rounded-0" type="submit" @click="handleClick">Найти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script>
import NavigationLink from '@/UI/NavigationLink.vue'

export default {
    name: 'HeaderComponent',
    components: {
        NavigationLink,
    },
    data() {
        return {
            searchTerm: "",
        };
    },
    methods: {
        handleClick() {
            this.$emit("search", this.searchTerm);
        },
        handleInput(event) {
            this.searchTerm = event.target.value;
        },
    },
};
</script>


<style scoped>
.navbar {
    width: 100%;
}

.search-item {
    position: relative;
    display: flex;
    margin-left: auto;
}

.form-control {
    width: 294px;
    border: 1px solid #E1E1E1;
    font-weight: 400;
    font-size: 14px;
    padding-right: 200px;
}

.form-control:focus {
    border-color: #999;
}

input[type="search"] {
    border: 2px solid transparent;
    border-width: 2px;
    border-color: #E1E1E1;
    width: 416px;
    padding: 13px 135px 13px 16px;
    outline: none;
}

input[type="search"]:focus {
    border-color: #B5B5B5;
    box-shadow: none;
}

.btn-search {
    position: absolute;
    right: 0;
    border-color: black;
    background-color: #403432;
    border-radius: 0px;
    padding: 12px 36px;
    color: white;
}

.btn-search:hover {
    border-color: rgb(148, 148, 148);
    background-color: #735f5c;
}
</style>
