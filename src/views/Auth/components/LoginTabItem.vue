<template>
  <div class="tab-content">
    <p class="tab-title font-400 text-center mt-5 dark-full">Tizimga kirish</p>

    <span
      class="error-text color-red d-block text-center font-400 mt-5"
    >Ma’lumotlar xato kiritildi, iltimos tekshirib qayta kiriting</span>

    <v-text-field class="mt-9" label="Telefon raqamni kiriting" outlined></v-text-field>
    <v-text-field type="password" label="Parolni kiriting" outlined></v-text-field>

    <p class="font-600 dark-full">
      Kirish tugmasini bosish bilan, siz bizning
      <router-link to="/" class="text-decoration-none color-pink">Foydalanish sharlari</router-link>miz va
      <router-link to="/" class="text-decoration-none color-pink">Maxfiylik siyosatimizga</router-link>&nbsp;rozilik bildirgan bo’lasiz
    </p>

    <div class="ophan-button-1">
      <v-btn class="w-100 text-white font-400" x-large depressed color="var(--pink)">KIRISH</v-btn>
    </div>

    <router-link
      to="/"
      class="forget-password font-600 color-red text-decoration-none text-center d-block mt-3"
    >Parolni unutdingizmi?</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>