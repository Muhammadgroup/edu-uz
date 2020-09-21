<template>
  <div class="tab-content">
    <div class="sign-step-1" v-if="step1">
      <p class="tab-title font-400 text-center mt-5 dark-full">Ro’yxatdan o’tish</p>

      <span
        class="error-text color-red d-block text-center font-400 mt-5"
      >Raqam notog’ri kiritilgan, iltimos tekshirib qayta kiriting</span>

      <v-text-field class="mt-9" label="Telefon raqamni kiriting" outlined></v-text-field>

      <div class="ophan-button-1">
        <v-btn
          @click="step1Route"
          class="w-100 text-white font-400 reset-text-case"
          x-large
          depressed
          color="var(--pink)"
        >Davom etish</v-btn>
      </div>
    </div>

    <div class="sign-step-2" v-if="step2">
      <p class="tab-title font-400 text-center mt-5 dark-full">Ro’yxatdan o’tish</p>

      <span
        class="error-text color-red d-block text-center font-400 mt-5"
      >Tasdiqlash kodi xato kiritildi, qayta urinib ko’ring</span>

      <v-text-field class="mt-9" label="Raqamga kelgan tasdiqlash kodini kiriting" outlined></v-text-field>

      <div class="ophan-button-1">
        <v-btn
          @click="step2Route"
          class="w-100 text-white font-400 reset-text-case"
          x-large
          depressed
          color="var(--pink)"
        >Davom etish</v-btn>
      </div>
    </div>

    <div class="sign-step-3" v-if="step3">
      <p class="tab-title font-400 text-center mt-5 dark-full">Ro’yxatdan o’tish</p>

      <span
        class="error-text color-red d-block text-center font-400 mt-5"
      >Kiritilgan parollar bir xil bo’lishi kerak!</span>

      <v-text-field class="mt-9" label="Ism" outlined></v-text-field>
      <v-text-field label="Familiya" outlined></v-text-field>
      <v-text-field type="password" label="Parol" outlined></v-text-field>
      <v-text-field type="password" label="Parolni qayta kiriting" outlined></v-text-field>

      <div class="ophan-button-1">
        <v-btn
          @click="step3Route"
          class="w-100 text-white font-400 reset-text-case"
          x-large
          depressed
          color="var(--pink)"
        >Davom etish</v-btn>
      </div>
    </div>

    <div class="sign-step-4" v-if="step4">
      <p class="tab-title font-400 text-center mt-5 dark-full">Ro’yxatdan o’tish</p>

      <span
        class="dark-full font-400 d-block mt-6"
      >Bizning tizimdan foydalanish shartlari va maxfiylik siyosati bilan tanishib roziligingizni bildiring</span>

      <router-link
        to="/"
        class="condition-text color-dark-green text-decoration-none d-block mt-5"
      >Foydalanish shartlari</router-link>
      <router-link
        to="/"
        class="condition-text color-dark-green text-decoration-none d-block mt-4 mb-10"
      >Maxfiylik siyosati</router-link>

      <div class="ophan-button-1">
        <v-btn
          class="w-100 text-white font-400 reset-text-case"
          x-large
          depressed
          color="var(--pink)"
        >Roziman</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    };
  },
  methods: {
    step1Route() {
      this.step1 = !this.step1;
      this.step2 = !this.step2;
    },
    step2Route() {
      this.step2 = !this.step2;
      this.step3 = !this.step3;
    },
    step3Route() {
      this.step3 = !this.step3;
      this.step4 = !this.step4;
    },
  },
};
</script>

<style>
</style>