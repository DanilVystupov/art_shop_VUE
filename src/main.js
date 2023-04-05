import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import CatalogPage from './pages/CatalogPage.vue'
import DeliveryPage from './pages/DeliveryPage.vue'
import PaymentPage from './pages/PaymentPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import AboutPage from './pages/AboutPage.vue'

const routes = [
    {
        path: '/catalog',
        name: 'CatalogPage',
        component: CatalogPage
    },
    {
        path: '/delivery',
        name: 'DeliveryPage',
        component: DeliveryPage
    },
    {
        path: '/payment',
        name: 'PaymentPage',
        component: PaymentPage
    },
    {
        path: '/contacts',
        name: 'ContactsPage',
        component: ContactsPage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
