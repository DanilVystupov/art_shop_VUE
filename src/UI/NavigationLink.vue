<template>
    <ul class="navbar-nav mb-2 mb-md-0">
        <li class="nav-item">
            <router-link class="nav-link text-dark p-0" to="/catalog">Каталог</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark p-0" to="/delivery">Доставка</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark p-0" to="/payment">Оплата</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark p-0" to="/contacts">Контакты</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark p-0" to="/about">О Нас</router-link>
        </li>
    </ul>
</template>

<style>
.nav-item {
    font-family: 'Merriweather';
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
}

.nav-item:first-child {
    margin-left: 96px;
}


.nav-item:not(:last-child) {
    margin-right: 48px;
}
</style>
  