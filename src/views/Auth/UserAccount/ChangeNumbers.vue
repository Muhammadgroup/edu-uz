<template>
    <div class="change-number-view">
        <div class="account-view-body mt-4">
            <span class="error-text-2 title-1 color-pink text-center d-block mb-4">Tasdiqlash kodi xato kiritildi</span>
            <div class="form-group mb-5">
                <label class="form-label-number">
                    <span class="form-label-number__text font-600 color-grey d-block mb-5">Shaxsiy raqamni o’zgartirish</span>

                    <v-text-field
                        v-mask="'+### ( ## ) ### - ## - ##'"
                        v-model="number1"
                        solo
                        clearable
                    ></v-text-field>
                </label>
            </div>

            <div class="form-group mb-5">
                <label class="form-label-number">
                    <span class="form-label-number__text font-600 color-grey d-block mb-5">Tasdiqlash kodini kiriting</span>

                    <v-text-field
                        solo
                        clearable
                    ></v-text-field>
                </label>
            </div>

            <div class="form-group mb-5">
                <label class="form-label-number">
                    <span class="form-label-number__text font-600 color-grey d-block mb-5">Ota yoki Onangizni raqamini o’zgartirish</span>

                    <v-text-field
                        v-mask="'+### ( ## ) ### - ## - ##'"
                        v-model="number1"
                        solo
                        clearable
                    ></v-text-field>
                </label>
            </div>

            <div class="account-buttons d-flex align-center justify-end mt-5">
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
    name: "ChangeNumbers",
    data() {
        return {
            number1: '',
        }
    }
}
</script>

<style scoped>

</style>