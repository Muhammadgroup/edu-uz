<template>
  <div class="course-start-view mt-10">
    <div class="course-start-box">
      <div
        class="course-start-header d-flex align-center justify-space-between"
      >
        <div class="course-name">
          <p>Karslar bo’yicha sara testlar</p>
        </div>
        <div class="course-countdown">
          <p>39:59</p>
        </div>
      </div>

      <div class="course-start-body">
        <div class="course-start-progress">
          <div class="course-start-progress-track" style="width: 20%"></div>
        </div>

        <div class="course-item-number d-flex flex-wrap my-3">
          <div
            v-for="item in 30"
            :key="item"
            class="course-start-items d-flex align-center justify-center text-white"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div class="course-start-content">
        <h1 class="color-dark font-600 mb-6">
          14/16 karsning qisqartilishidan hosil bo’lgan kasrni ...
        </h1>

        <div class="course-answer-items p-relative">
          <span>Surati 8ga maxraji 16ga teng bo’ladi</span>

          <input type="radio" name="radio" id="answer-1" />
          <label for="answer-1" class="course-answer-correct"></label>
        </div>

        <div class="course-answer-items p-relative">
          <span>Surati 8ga maxraji 14ga teng bo’ladi</span>

          <input type="radio" name="radio" id="answer-2" />
          <label for="answer-2" class="course-answer-correct"></label>
        </div>

        <div class="course-answer-items p-relative">
          <span>Surati 7ga maxraji 6ga teng bo’ladi</span>

          <input type="radio" name="radio" id="answer-3" />
          <label for="answer-3" class="course-answer-correct"></label>
        </div>

        <div class="course-answer-items p-relative">
          <span>Surati 7ga maxraji 8ga teng bo’ladi</span>

          <input type="radio" name="radio" id="answer-4" />
          <label for="answer-4" class="course-answer-correct"></label>
        </div>
      </div>

      <div class="course-next-button mt-5 mb-15 text-right">
        <v-btn class="reset-text-case font-600" color="var(--pink)" large dark
          >Keyingisi</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>