import HeaderComponent from '@/components/HeaderComponent.vue';
import BodyComponent from '@/components/BodyComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: BodyComponent,
            header: HeaderComponent,
            footer: FooterComponent,
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
