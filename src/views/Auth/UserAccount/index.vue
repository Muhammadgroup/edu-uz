<template>
    <div class="user-account-wrap">
        <div class="account-container d-flex">
            <div class="account-sidebar">
                <router-link :to="{name: 'personal-settings'}" exact
                             class="account-sidebar-items d-block text-decoration-none">
                    Shaxsiy sozlamalar
                </router-link>

                <router-link :to="{name: 'change-password'}" exact
                             class="account-sidebar-items d-block text-decoration-none">
                    Parolni o'zgartirish
                </router-link>

                <router-link :to="{name: 'history-of-entries'}" exact
                             class="account-sidebar-items d-block text-decoration-none">
                    Kirishlar tarixi
                </router-link>

                <router-link :to="{name: 'payment-history'}" exact
                             class="account-sidebar-items d-block text-decoration-none">
                    To'lovlar tarixi
                </router-link>

                <router-link :to="{name: 'change-system-language'}" exact
                             class="account-sidebar-items d-block text-decoration-none">
                    Tizim tilini o'zgartirish
                </router-link>

                <router-link :to="{name: 'change-numbers'}" exact
                             class="account-sidebar-items d-block text-decoration-none">
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
export default {
    name: "index",
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>