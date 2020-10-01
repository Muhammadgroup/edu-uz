<template>
  <div class="watch-course-view">
    <div class="course-content-wrap d-flex">
      <div class="course-content-left">
        <v-expansion-panels v-model="panel" class="course-expand-wrap">
          <v-expansion-panel>
            <v-expansion-panel-content>
              <div class="course-expand-content">
                <div class="course-ration">
                  <div class="course-ration-content">
                    <v-carousel hide-delimiters height="100%">
                      <v-carousel-item v-for="(item, i) in 3" :key="i">
                        <video-player
                          class="video-player-box"
                          ref="videoPlayer"
                          :options="playerOptions"
                        >
                        </video-player>
                      </v-carousel-item>
                    </v-carousel>
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
            <div class="course-expand-footer">
              <div class="course-expand-tabs">
                <v-tabs
                  v-model="tab"
                  background-color="transparent"
                  color="basil"
                  grow
                >
                  <div class="tab-expand-header d-flex w-100">
                    <v-tab> <span>Maruzalar</span> </v-tab>
                    <v-tab> <span>Vazifalar</span> </v-tab>
                    <v-tab> <span>Testlar</span> </v-tab>
                    <v-tab> <span>Qo’shimcha fayllar</span> </v-tab>
                    <v-tab class="mobile-tab"> <span>Darslar</span> </v-tab>

                    <div class="tab-expand-tools d-flex align-center">
                      <div class="expand-tools-wrap d-flex align-center">
                        <div class="expand-tools-item">
                          <img
                            style="width: 25px"
                            src="@/assets/img/icons/icon-36.svg"
                            alt=""
                          />
                        </div>
                        <div class="expand-tools-item">
                          <img
                            style="width: 32px"
                            src="@/assets/img/icons/icon-37.svg"
                            alt=""
                          />
                        </div>

                        <v-expansion-panel-header
                          expandIcon=""
                          class="py-0 px-0"
                        >
                          <div class="expand-tools-item collapse-expander">
                            <img
                              style="width: 27px"
                              src="@/assets/img/icons/icon-38.svg"
                              alt=""
                            />
                          </div>
                        </v-expansion-panel-header>
                      </div>
                    </div>
                  </div>
                </v-tabs>

                <v-tabs-items v-model="tab" data-set="height">
                  <v-tab-item class="expand-tab-items">
                    <div>
                      <div>
                        <p>Kasrlar ustida amallar bajarish</p>
                        <p>Kasrlar ustida amallar bajarish</p>
                      </div>
                    </div>
                  </v-tab-item>
                  <v-tab-item class="expand-tab-items">
                    <div class="test-blog-wrap">
                      <div class="test-blog-item">
                        <h1 class="color-grey mb-7">1. Vazifalar nomi</h1>

                        <div class="test-blog-item-card">
                          <span class="color-grey font-500 mb-3 d-block"
                            >Vazifa uchun tarif</span
                          >
                          <p>
                            Darsda berilgan ma’lumotlarni mustahkamlash
                            maqsadida quyidagi misollarni ishlab chiqing
                          </p>
                        </div>

                        <div class="test-blog-button mt-8">
                          <v-btn
                            color="var(--pink)"
                            dark
                            large
                            class="reset-text-case"
                          >
                            Boshlash
                          </v-btn>
                        </div>
                      </div>

                      <div class="test-blog-item">
                        <h1 class="color-grey mb-7">2. Vazifalar nomi</h1>

                        <div class="test-blog-item-card">
                          <span class="color-grey font-500 mb-3 d-block"
                            >Vazifa uchun tarif</span
                          >

                          <div class="voice-wrap d-flex align-center pointer">
                            <span class="mr-auto color-dark font-500"
                              >Audioxabar</span
                            >
                            <div class="voice-icon">
                              <img
                                src="@/assets/img/icons/icon-45.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>

                        <div class="test-blog-button mt-8">
                          <v-btn
                            color="var(--pink)"
                            dark
                            large
                            class="reset-text-case"
                          >
                            Boshlash
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-tab-item>
                  <v-tab-item class="expand-tab-items test-blog-tab">
                    <div class="test-blog-wrap">
                      <div class="test-blog-item">
                        <h1 class="color-grey mb-5">
                          Maruzan yuzasidan sinov test
                        </h1>

                        <div class="test-blog-button">
                          <v-btn
                            color="var(--pink)"
                            dark
                            large
                            class="reset-text-case"
                          >
                            Boshlash
                          </v-btn>
                        </div>
                      </div>

                      <div class="test-blog-item">
                        <h1 class="color-grey mb-5">
                          Dars yuzasidan o’zlashtirish ko’rsatkichini aniqlovchi
                          test
                        </h1>

                        <div class="test-blog-button">
                          <v-btn
                            color="var(--pink)"
                            dark
                            large
                            class="reset-text-case"
                          >
                            Boshlash
                          </v-btn>
                        </div>
                      </div>
                    </div>

                    <div class="test-blog-start mt-5">
                      <div class="course-start-box">
                        <div
                          class="course-start-header mb-2 d-flex align-center justify-space-between"
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
                            <div
                              class="course-start-progress-track"
                              style="width: 20%"
                            ></div>
                          </div>

                          <div class="course-item-number d-flex flex-wrap my-3">
                            <div
                              class="course-start-items is-finished d-flex align-center justify-center text-white"
                            >
                              1
                            </div>
                            <div
                              class="course-start-items active d-flex align-center justify-center text-white"
                            >
                              2
                            </div>
                            <div
                              v-for="item in 28"
                              :key="item"
                              class="course-start-items d-flex align-center justify-center text-white"
                            >
                              {{ item + 2 }}
                            </div>
                          </div>
                        </div>

                        <div class="course-start-content">
                          <h1 class="color-dark font-600 mb-6">
                            1. 14/16 karsning qisqartilishidan hosil bo’lgan
                            kasrni surat qismi _ ga teng bo’lib maxraji _ ga
                            teng bo’ladi.
                          </h1>
                        </div>

                        <div class="course-next-button mt-5 mb-15 text-right">
                          <router-link
                            :to="{ name: 'test-result' }"
                            class="d-block text-decoration-none"
                          >
                            <v-btn
                              class="reset-text-case font-600"
                              color="var(--pink)"
                              large
                              dark
                              >Keyingisi</v-btn
                            >
                          </router-link>
                        </div>
                      </div>
                    </div>

                    <div class="test-resul-finish">
                      <div class="test-result-view mt-10">
                        <h1 class="title-1 mb-5">
                          Karslar bo’yicha sara testlar
                        </h1>

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
                                <span class="result-progress-text"
                                  >{{ value }}%</span
                                >
                              </v-progress-circular>
                            </div>

                            <div class="test-result-text">
                              <div
                                class="teset-result-text-items d-flex align-center"
                              >
                                <p>To’g’ri javoblar soni:</p>
                                <p>23ta</p>
                              </div>

                              <div
                                class="teset-result-text-items d-flex align-center"
                              >
                                <p>Xato javoblar soni:</p>
                                <p>7ta</p>
                              </div>

                              <div
                                class="teset-result-text-items d-flex align-center"
                              >
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
                              <v-btn
                                class="reset-text-case font-600"
                                color="var(--pink)"
                                large
                                dark
                                >Javoblarni ko’rish</v-btn
                              >
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-tab-item>
                  <v-tab-item class="expand-tab-items">
                    <div class="test-blog-wrap">
                      <div class="test-blog-item">
                        <h1 class="color-grey mb-5">to’plam 2020.pdf</h1>

                        <div class="test-blog-button">
                          <v-btn
                            color="var(--grey)"
                            dark
                            large
                            class="reset-text-case"
                          >
                            Yuklab olish
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-tab-item>
                  <!-- Mobile uchun-->
                  <v-tab-item class="expand-tab-items mobile-tab-item">
                    <div class="mobile-course-wrap">
                      <div
                        v-for="item in 20"
                        :key="item"
                        class="course-content-items d-flex align-center"
                        @click="warningModal = true"
                      >
                        <div
                          class="course-item-count d-flex align-center justify-center mr-5"
                        >
                          <p class="mb-0">{{ item }}</p>
                        </div>

                        <span class="mr-2"
                          >Kasrlar ustida amallar bajarish</span
                        >

                        <div class="course-lock ml-auto">
                          <img src="@/assets/img/icons/icon-35.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="course-content-aside">
        <div
          v-for="item in 20"
          :key="item"
          class="course-content-items d-flex align-center"
          @click="warningModal = true"
        >
          <div
            class="course-item-count d-flex align-center justify-center mr-5"
          >
            <p class="mb-0">{{ item }}</p>
          </div>

          <span class="mr-2">Kasrlar ustida amallar bajarish</span>

          <div class="course-lock ml-auto">
            <img src="@/assets/img/icons/icon-35.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="warningModal" max-width="600">
      <div class="share-modal-wrap p-relative">
        <div class="remove-icon p-absolute" @click="warningModal = false">
          <img src="@/assets/img/icons/icon-41.svg" alt="" />
        </div>

        <div class="warning-image d-flex align-center justify-center my-2">
          <img src="@/assets/img/icons/icon-42.svg" alt="" />
        </div>

        <h1 class="text-center color-grey font-600 mb-5">
          Bu darsni boshlash uchun avvalgi darslarni yakunlashingiz lozim
        </h1>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { setScrollHeight } from "@/utils/frontend";

export default {
  data() {
    return {
      panel: 0,
      value: 85,
      tab: null,
      warningModal: false,
      playerOptions: {
        muted: false,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src: require("@/assets/img/video/video.mp4"),
          },
        ],
        poster: require("@/assets/img/video/poster-img-1.jpg"),
      },
    };
  },
  mounted() {
    const $el = document.querySelector(
      ".course-expand-tabs .v-slide-group__wrapper"
    );
    const $bodyWidth = document.querySelector("body").clientWidth;

    if ($bodyWidth < 578) {
      $el.style.width = `${$bodyWidth}px`;
    }

    setScrollHeight();
  },
};
</script>

<style>
</style>