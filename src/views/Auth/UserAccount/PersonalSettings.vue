<template>
    <div class="user-account-view">
        <div class="account-view-top d-flex align-center">
            <div class="user-avatar mr-9">
                <img src="@/assets/img/icons/default-avatar.svg" alt="">
            </div>
            <div class="user-photo-upload">
                <h1 class="title-1 color-dark mb-5">Rasmni o'zgartirish</h1>

                <div class="upload-wrap d-flex">
                    <v-file-input class="text-white" truncate-length="34" prepend-icon="" placeholder="Rasmni tanglang"></v-file-input>
                    <img src="@/assets/img/icons/icon-22.svg" alt="">
                </div>
            </div>
        </div>

        <div class="account-view-body mt-6">
            <div class="form-group mb-4">
                <label for="name" class="form-label">
                    <span class="form-label__text font-600 color-dark d-block mb-2">Ismni o'zgartirish</span>
                    <input type="text" id="name" class="d-block w-100" placeholder="Ismni o'zgartirish" />
                </label>
            </div>

            <div class="form-group mb-4">
                <label for="surname" class="form-label">
                    <span class="form-label__text font-600 color-dark d-block mb-2">Familiyani o’zgaritish</span>
                    <input type="text" id="surname" class="d-block w-100" placeholder="Familiyani o’zgaritish" />
                </label>
            </div>

            <div class="form-group mb-4">
                <label for="middle-name" class="form-label">
                    <span class="form-label__text font-600 color-dark d-block mb-2">Sharfini o’zgaritish</span>
                    <input type="text" id="middle-name" class="d-block w-100" placeholder="Sharfini o’zgaritish" />
                </label>
            </div>

            <div class="account-buttons d-flex align-center justify-end mt-5">
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
    name: "PersonalSettings"
}
</script>

<style scoped>

</style>