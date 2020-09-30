<template>
  <div class="show-course-view mt-5">
    <h1
      class="title-1 mb-3 color-dark"
    >Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</h1>

    <div class="module-course-wrap d-flex flex-wrap mt-5">
      <router-link
        :to="{name: 'course-info'}"
        class="module-course-items text-decoration-none d-block"
      >
        <div class="module-course-header d-flex justify-space-between align-center mb-7">
          <div class="mr-3">
            <h1 class="title-1">1-modul</h1>
          </div>
          <div>
            <div class="course-progress-track">
              <div class="progress-track d-flex align-center justify-center" style="width: 43%">
                <span class="progress-text font-600 text-white">43%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="module-course-meta d-flex justify-space-between align-center">
          <div class="mr-3">
            <h1 class="title-1">12ta dars</h1>
          </div>

          <div class="course-progress-button text-right">
            <v-btn color="#83D2B7" class="text-white font-400 reset-text-case" depressed>Davom etish</v-btn>
          </div>
        </div>
      </router-link>

      <div class="module-course-items">
        <div class="module-course-header d-flex justify-space-between align-center mb-7">
          <div class="mr-3">
            <h1 class="title-1">1-modul</h1>
          </div>
          <div>
            <h1 class="title-1 text-right">12ta dars</h1>
          </div>
        </div>

        <div class="module-course-meta d-flex justify-space-between align-center">
          <div class="course-progress-button text-center">
            <v-btn color="#83D2B7" class="text-white font-400 reset-text-case" depressed>Yopiq</v-btn>
          </div>
        </div>
      </div>

      <div class="module-course-items">
        <div class="module-course-header d-flex justify-space-between align-center mb-7">
          <div class="mr-3">
            <h1 class="title-1">3-modul</h1>
          </div>
          <div>
            <h1 class="title-1 text-right">12ta dars</h1>
          </div>
        </div>

        <div class="module-course-meta d-flex justify-space-between align-center">
          <div class="course-progress-button text-center">
            <v-btn color="#83D2B7" class="text-white font-400 reset-text-case" depressed>Yopiq</v-btn>
          </div>
        </div>
      </div>

      <div class="module-course-items">
        <div class="module-course-header d-flex justify-space-between align-center mb-7">
          <div class="mr-3">
            <h1 class="title-1">4-modul</h1>
          </div>
          <div>
            <h1 class="title-1 text-right">12ta dars</h1>
          </div>
        </div>

        <div class="module-course-meta d-flex justify-space-between align-center">
          <div class="course-progress-button text-center">
            <v-btn color="#83D2B7" class="text-white font-400 reset-text-case" depressed>Yopiq</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>