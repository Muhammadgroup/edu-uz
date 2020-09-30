<template>
  <div class="confirmation-payment-view">
    <div class="payment-view">
      <p class="text-center">Tasdiqlash kodini kitiring</p>

      <div class="payment-view-box coupon-field">
        <span class="payment-error-text"
          >Mavjud kuponni amal qilish muddati o’tib ketgan</span
        >

        <div class="payment-card-number">
          <span class="color-grey mb-2 d-block">Kupon kodini kiriting</span>

          <div class="payment-card-field">
            <input
              class="payment-card-input"
              type="text"
              v-model="inputVal"
              v-mask="'# # # #'"
            />
          </div>
        </div>
      </div>

      <div class="payment-button text-center my-4">
        <router-link
          :to="{ name: 'success-payment' }"
          class="text-decoration-none"
        >
          <v-btn class="reset-text-case" color="var(--pink)" x-large dark>
            Davom etish
          </v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: "",
    };
  },
};
</script>

<style>
</style>