<template>
    <div class="footer">
        <div class="container p-0">
            <div class="navbar navbar-expand-md pt-4 pb-4">
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <navigation-link></navigation-link>
                    <div class="footer-number">
                        <img :src="phone" alt="phone">
                        <span class="footer-text-primary">
                            +7 (123) 456-78-90
                        </span>
                    </div>

                    <div class="footer-address">
                        <img :src="address" alt="address">
                        <span class="footer-address-text">г. Санкт-Петербург, ул. Ефимова, 3</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationLink from '@/UI/NavigationLink.vue';
import phone from '@/images/phone.png';
import address from '@/images/address.png';

export default {
    name: 'FooterComponent',
    components: {
        NavigationLink,
    },
    data() {
        return {
            phone: phone,
            address: address,
        }
    }
}
</script>

<style scoped>
.footer {
    background-color: #ECEAEA;
}

.footer-number {
    display: flex;
    align-items: center;
    margin-left: 127px;
}

.footer-text-primary {
    color: #555555;
    margin-left: 10px;
}

.footer-address {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.footer-address-text {
    margin-left: 10px;
}
</style> 