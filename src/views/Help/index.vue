<template>
  <div class="help-view">
    <p class="help-view-title my-10">Yordam</p>

    <div class="help-link-wrap">
      <router-link
        :to="{name: 'instructions'}"
        class="help-view-links text-decoration-none d-flex align-center"
      >
        <img src="@/assets/img/icons/icon-23.svg" class="mr-8" alt />
        <span>Yo’riqnomalar</span>
      </router-link>

      <router-link
        :to="{name: 'system-use-condition'}"
        class="help-view-links text-decoration-none d-flex align-center"
      >
        <img src="@/assets/img/icons/icon-24.svg" class="mr-8" alt />
        <span>Foydalanish shartlari</span>
      </router-link>

      <router-link to="/" class="help-view-links text-decoration-none d-flex align-center">
        <img src="@/assets/img/icons/icon-25.svg" class="mr-8" alt />
        <span>Xavfsizlik siyosati</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>