<template>
  <div class="search-result-view">
    <div class="search-top mt-10 mb-16">
      <h1 class="title-1 mb-10 dark-full">Havolalar</h1>

      <span class="color-grey"
        >Quyidagi so’rov bo’yicha havolalar mavjud emas</span
      >

      <div class="search-result-crumbs">
        <v-breadcrumbs :items="itemsAnchor">
          <template v-slot:divider>
            <img src="@/assets/img/icons/icon-44.svg" alt="" />
          </template>
        </v-breadcrumbs>
      </div>
    </div>

    <div class="search-courses-result">
      <div
        class="search-result-header d-flex align-center justify-space-between mb-6"
      >
        <p class="mb-0">Kurslar</p>

        <div class="course-sort-wrap">
          <v-select :items="items" label="Yangilari bo'yicha"></v-select>
        </div>
      </div>

      <span class="color-grey"
        >Quyidagi so’rov bo’yicha havolalar mavjud emas</span
      >

      <div class="search-course-items-wrap" data-set="height">
        <div class="search-result-items d-flex align-center">
          <div class="search-block-text">
            <p class="mb-1">
              Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi
            </p>
            <span class="color-grey">Nazar Nazarov</span>
          </div>
          <div class="search-block-rating d-flex align-center">
            <div class="block-raiting-text">
              <span>4.9</span>
            </div>
            <div class="block-raiting-stars">
              <div class="block-star-component">
                <star-rating
                  :show-rating="false"
                  inactive-color="#C4C4C4"
                  active-color="#A5D9A1"
                  :star-size="18"
                  :increment="0.01"
                  :rating="3.8"
                  :fixed-points="2"
                  :read-only="true"
                  :border-width="1"
                  border-color="#d8d8d8"
                  :rounded-corners="true"
                  :star-points="[
                    23,
                    2,
                    14,
                    17,
                    0,
                    19,
                    10,
                    34,
                    7,
                    50,
                    23,
                    43,
                    38,
                    50,
                    36,
                    34,
                    46,
                    19,
                    31,
                    17,
                  ]"
                />
              </div>
              <span>24ta ovoz</span>
            </div>
          </div>
        </div>

        <div class="search-result-items d-flex align-center">
          <div class="search-block-text">
            <p class="mb-1">Super matematika kursi</p>
            <span class="color-grey">Javohir Abdullayev</span>
          </div>
          <div class="search-block-rating d-flex align-center">
            <div class="block-raiting-text">
              <span>4.9</span>
            </div>
            <div class="block-raiting-stars">
              <div class="block-star-component">
                <star-rating
                  :show-rating="false"
                  inactive-color="#C4C4C4"
                  active-color="#A5D9A1"
                  :star-size="18"
                  :increment="0.01"
                  :rating="3.8"
                  :fixed-points="2"
                  :read-only="true"
                  :border-width="1"
                  border-color="#d8d8d8"
                  :rounded-corners="true"
                  :star-points="[
                    23,
                    2,
                    14,
                    17,
                    0,
                    19,
                    10,
                    34,
                    7,
                    50,
                    23,
                    43,
                    38,
                    50,
                    36,
                    34,
                    46,
                    19,
                    31,
                    17,
                  ]"
                />
              </div>
              <span>24ta ovoz</span>
            </div>
          </div>
        </div>

        <div class="search-result-items d-flex align-center">
          <div class="search-block-text">
            <p class="mb-1">
              3 oyda matematikani mukammal o’zlashtirish sirlari
            </p>
            <span class="color-grey">Murodjon Alijonov</span>
          </div>
          <div class="search-block-rating d-flex align-center">
            <div class="block-raiting-text">
              <span>4.9</span>
            </div>
            <div class="block-raiting-stars">
              <div class="block-star-component">
                <star-rating
                  :show-rating="false"
                  inactive-color="#C4C4C4"
                  active-color="#A5D9A1"
                  :star-size="18"
                  :increment="0.01"
                  :rating="3.8"
                  :fixed-points="2"
                  :read-only="true"
                  :border-width="1"
                  border-color="#d8d8d8"
                  :rounded-corners="true"
                  :star-points="[
                    23,
                    2,
                    14,
                    17,
                    0,
                    19,
                    10,
                    34,
                    7,
                    50,
                    23,
                    43,
                    38,
                    50,
                    36,
                    34,
                    46,
                    19,
                    31,
                    17,
                  ]"
                />
              </div>
              <span>24ta ovoz</span>
            </div>
          </div>
        </div>

        <div class="search-result-items d-flex align-center">
          <div class="search-block-text">
            <p class="mb-1">Mental arifmetika kursi(matematika)</p>
            <span class="color-grey">Muhammad Karimov</span>
          </div>
          <div class="search-block-rating d-flex align-center">
            <div class="block-raiting-text">
              <span>4.9</span>
            </div>
            <div class="block-raiting-stars">
              <div class="block-star-component">
                <star-rating
                  :show-rating="false"
                  inactive-color="#C4C4C4"
                  active-color="#A5D9A1"
                  :star-size="18"
                  :increment="0.01"
                  :rating="3.8"
                  :fixed-points="2"
                  :read-only="true"
                  :border-width="1"
                  border-color="#d8d8d8"
                  :rounded-corners="true"
                  :star-points="[
                    23,
                    2,
                    14,
                    17,
                    0,
                    19,
                    10,
                    34,
                    7,
                    50,
                    23,
                    43,
                    38,
                    50,
                    36,
                    34,
                    46,
                    19,
                    31,
                    17,
                  ]"
                />
              </div>
              <span>24ta ovoz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { setScrollHeight } from "@/utils/frontend";

export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    itemsAnchor: [
      {
        text: "Sozlamalar",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Tilni o’zgatirish",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
    ],
  }),
  components: {
    StarRating,
  },
  mounted() {
    setScrollHeight();
  },
};
</script>

<style>
</style>