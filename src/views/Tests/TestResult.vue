<template>
  <div class="test-result-view mt-10">
    <h1 class="title-1 mb-5">Karslar bo’yicha sara testlar</h1>

    <div class="test-result-box">
      <div class="test-result-content d-flex align-center">
        <div class="result-cirle">
          <v-progress-circular
            :rotate="-90"
            :size="165"
            :width="25"
            :value="value"
            color="#A1D9BE"
          >
            <span class="result-progress-text">{{ value }}%</span>
          </v-progress-circular>
        </div>

        <div class="test-result-text">
          <div class="teset-result-text-items d-flex align-center">
            <p>To’g’ri javoblar soni:</p>
            <p>23ta</p>
          </div>

          <div class="teset-result-text-items d-flex align-center">
            <p>Xato javoblar soni:</p>
            <p>7ta</p>
          </div>

          <div class="teset-result-text-items d-flex align-center">
            <p>Test uchun ketgan vaqt:</p>
            <p>39:18</p>
          </div>
        </div>
      </div>

      <div class="course-next-button mt-6 text-right">
        <router-link
          :to="{ name: 'test-result' }"
          class="d-block text-decoration-none"
        >
          <v-btn class="reset-text-case font-600" color="var(--pink)" large dark
            >Javoblarni ko’rish</v-btn
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 85,
    };
  },
};
</script>

<style>
</style>