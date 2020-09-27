<template>
  <div class="course-payment-view">
    <div class="payment-view">
      <p class="text-center">To’lovni amalga oshirish</p>

      <div class="payment-view-form mt-7">
        <p class="color-pink mb-4">To’lov summasi: 400 000 so’m</p>

        <div class="payment-view-box d-flex">
          <div class="payment-card-number mr-6">
            <span class="color-grey mb-2 d-block">Karta raqami</span>

            <div class="payment-card-field">
              <input
                class="payment-card-input"
                type="text"
                v-model="inputVal"
                v-mask="'####  ####  ####  ####'"
              />
            </div>
          </div>

          <div class="payment-card-code">
            <span class="color-grey mb-2 d-block">Amal qilish muddati</span>

            <div class="payment-card-field">
              <input
                class="payment-card-input"
                type="text"
                v-model="inputVal2"
                v-mask="'## / ##'"
              />
            </div>
          </div>
        </div>

        <router-link
          :to="{ name: 'coupon-payment' }"
          class="has-coupon d-flex align-center text-decoration-none mt-2"
        >
          <v-checkbox color="var(--green)" v-model="checkbox"></v-checkbox>
          <span class="color-dark font-700">Kupon mavjud</span>
        </router-link>

        <div class="payment-button text-center my-4">
          <router-link
            :to="{ name: 'confirmation-payment' }"
            class="text-decoration-none"
          >
            <v-btn class="reset-text-case" color="var(--pink)" x-large dark>
              Davom etish
            </v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: "",
      inputVal2: "",
      checkbox: false,
    };
  },
};
</script>

<style>
</style>