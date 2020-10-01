<template>
  <div class="chat-user-id-view">
    <div class="mobile-chat-id-meta align-center">
      <div class="mobile-chat-back" @click="goBack">
        <img class="d-block" src="@/assets/img/icons/icon-46.svg" alt="" />
      </div>
      <span class="ml-3 mr-auto">Nazar Nazarov</span>
      <div class="user-id-meta-avatar">
        <img src="@/assets/img/icons/default-avatar.svg" alt="" />
      </div>
    </div>
    <div class="chat-id-view px-2">
      <div class="chat-id-comment">
        <div class="chat-comment-for-text d-flex">
          <div class="chat-id-comment-date">
            <span>15:08</span>
          </div>
          <div class="chat-meta-text">
            <p>
              Assalomu alaykum, Nazar aka testlarni qayta topshirsam bo’ladimi
            </p>
          </div>
        </div>
      </div>

      <div class="chat-id-comment mr-auto">
        <div class="chat-comment-for-voice d-flex">
          <div class="voice-wrap d-flex align-center pointer">
            <span class="mr-auto color-dark font-500">Audioxabar</span>
            <div class="voice-icon">
              <img src="@/assets/img/icons/icon-45.svg" alt="" />
            </div>
          </div>
          <div class="chat-id-comment-date">
            <span>15:08</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-text-content d-flex align-center">
      <div class="chat-footer-items">
        <i class="mdi mdi-microphone"></i>
      </div>
      <label for="file" class="chat-footer-items">
        <input type="file" id="file" class="d-none" />
        <i class="mdi mdi-file-document-outline"></i>
      </label>
      <div class="chat-text-field mx-4 p-relative">
        <textarea class="pr-4" @input="startWrite"></textarea>
        <span>Xabar jo’natish uchun bu yerga biror nima yozing...</span>
      </div>
      <div class="chat-footer-items send-comment-wrap">
        <i class="mdi mdi-telegram"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    goBack() {
      //   const $chatView = document.querySelector('[data-chat="view"]');
      //   $chatView.classList.remove("active");
    },
    startWrite() {
      const $target = event.target;
      const $placeholder = $target.nextElementSibling;

      if ($target.value) {
        $placeholder.classList.add("active");
      } else {
        $placeholder.classList.remove("active");
      }
    },
  },
};
</script>

<style>
</style>