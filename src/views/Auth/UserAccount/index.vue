<template>
    <div class="user-account-wrap">
        <div class="account-container d-flex">
            <div class="account-sidebar">
                <router-link
                    :to="{name: 'personal-settings'}"
                    exact
                    class="account-sidebar-items d-block text-decoration-none"
                    data-toggle="mobile"
                >
                    Shaxsiy sozlamalar
                </router-link>

                <router-link :to="{name: 'change-password'}" exact
                             class="account-sidebar-items d-block text-decoration-none" data-toggle="mobile">
                    Parolni o'zgartirish
                </router-link>

                <router-link :to="{name: 'history-of-entries'}" exact
                             class="account-sidebar-items d-block text-decoration-none" data-toggle="mobile">
                    Kirishlar tarixi
                </router-link>

                <router-link :to="{name: 'payment-history'}" exact
                             class="account-sidebar-items d-block text-decoration-none" data-toggle="mobile">
                    To'lovlar tarixi
                </router-link>

                <router-link :to="{name: 'change-system-language'}" exact
                             class="account-sidebar-items d-block text-decoration-none" data-toggle="mobile">
                    Tizim tilini o'zgartirish
                </router-link>

                <router-link :to="{name: 'change-numbers'}" exact
                             class="account-sidebar-items d-block text-decoration-none" data-toggle="mobile">
                    Raqamlarni o'zgartirish
                </router-link>
            </div>

            <div class="account-view">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import {mobileSidebar} from '@/utils/frontend'
export default {
    name: "index",
    data() {
        return {}
    },
    mounted() {
        mobileSidebar()
    }
}
</script>

<style scoped>

</style>