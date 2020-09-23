<template>
  <div class="char-wrap h-100">
    <div class="chat-area">
      <div class="chat-aside">
        <div class="chat-aside-header d-flex align-center justify-center">
          <p class="mb-0">Yozishmalar</p>
        </div>

        <div class="chat-contact-wrap">
          <router-link
            :to="{name: 'user-chat-area'}"
            class="contact-items text-decoration-none d-flex align-center"
          >
            <div class="contact-item-avatar mr-3">
              <img src="@/assets/img/icons/default-avatar.svg" alt />
            </div>
            <div class="contact-item-meta">
              <h1 class="mb-0">Javohir Abdullayev</h1>
              <span>bunga boshqa yo’l bilan ketiladi</span>
            </div>
          </router-link>

          <router-link to="/" class="contact-items text-decoration-none d-flex align-center">
            <div class="contact-item-avatar mr-3">
              <img src="@/assets/img/icons/default-avatar.svg" alt />
            </div>
            <div class="contact-item-meta mr-4">
              <h1 class="mb-0">Nazar Nazarov</h1>
              <span>audioxabar</span>
            </div>

            <div
              class="contact-message-count d-flex align-center justify-center text-white font-400"
            >
              <p class="mb-0">1</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="chat-message-area">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>