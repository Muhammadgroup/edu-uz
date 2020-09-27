<template>
  <div class="confirmation-payment-view">
    <div class="payment-view">
      <p class="text-center">Tasdiqlash kodini kitiring</p>

      <div class="payment-view-box confirmation-field my-15 py-5">
        <div class="payment-card-number">
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
            Saqlash
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