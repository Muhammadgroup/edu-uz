<template>
    <div class="change-system-language-view">
        <div class="account-view-body">

            <div class="system-language-button">
                <v-select
                    class="language-button reset-text-case p-relative"
                    :items="items"
                    label="O'zbek"
                    solo
                ></v-select>
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
    name: "ChangeSystemLanguage",
    data() {
        return {
            items: ['Русский', 'English', 'Qoraqalpoq'],
        }
    }
}
</script>

<style scoped>

</style>