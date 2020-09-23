<template>
    <div class="change-password-view">
        <div class="account-view-body mt-10">
            <div class="form-group mb-11">
                <label for="old-password" class="form-label">
                    <span class="form-label__text font-600 color-dark d-block mb-2">Eski parolni kiriting</span>
                    <input type="password" id="old-password" class="d-block w-100" placeholder="Eski parolni kiriting" />
                </label>
            </div>

            <div class="form-group mb-11">
                <label for="new-password" class="form-label">
                    <span class="form-label__text font-600 color-dark d-block mb-2">Yangi parolni kiriting</span>
                    <input type="password" id="new-password" class="d-block w-100" placeholder="Yangi parolni kiriting" />
                </label>
            </div>

            <div class="form-group mb-11">
                <label for="re-enter-password" class="form-label">
                    <span class="form-label__text font-600 color-dark d-block mb-2">Yangi parolni qayta kiriting</span>
                    <input type="text" id="re-enter-password" class="d-block w-100" placeholder="Yangi parolni qayta kiriting" />
                </label>
            </div>

            <div class="account-buttons d-flex align-center justify-end">
                <v-btn
                    class="button-default reset-text-case dark-full mr-6"
                    dark
                    large
                >
                    Bekor qilish
                </v-btn>

                <v-btn
                    class="reset-text-case text-white"
                    color="#FFA097"
                    large
                >
                    Saqlash
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChangePassword"
}
</script>

<style scoped>

</style>