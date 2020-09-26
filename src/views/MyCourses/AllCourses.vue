<template>
  <div class="all-courses-view mt-4">
    <h1 class="title-1 mb-3 color-dark">Barcha kurslar</h1>

    <div class="courses-card-wrap d-flex flex-wrap">
      <div class="courses-card-item">
        <router-link :to="{name: 'show-course'}" class="flickity-card text-decoration-none d-block">
          <div class="flickity-card-img">
            <img src="@/assets/img/course-img-1.png" class="img-cover" alt />
          </div>

          <p class="subject-name">Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

          <span class="subject-owner color-grey font-600">Nazar Nazarov</span>

          <div class="subject-raiting d-flex align-center justify-space-between mt-1">
            <div class="subject-stars">
              <v-rating
                v-model="rating"
                color="#A5D9A1"
                background-color="#C4C4C4"
                empty-icon="$ratingFull"
                half-increments
                size="22"
                :readonly="true"
              ></v-rating>
            </div>
            <div class="subject-cost">
              <p class="mt-0 text-decoration-line-through">400 000</p>
            </div>
          </div>

          <div class="subject-votes d-flex align-center justify-space-between mt-1">
            <h1 class="subject-votes-number mt-0 mb-0">300</h1>
            <span class="subject-votes-count">17ta ovoz</span>
            <p class="mt-0 mb-0">300 000</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.5,
    };
  },
};
</script>

<style>
</style>