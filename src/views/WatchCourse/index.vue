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

                <v-tabs-items v-model="tab">
                  <v-tab-item class="expand-tab-items">
                    <div>
                      <div>
                        <p>Kasrlar ustida amallar bajarish</p>
                        <p>Kasrlar ustida amallar bajarish</p>
                      </div>
                    </div>
                  </v-tab-item>
                  <v-tab-item class="expand-tab-items"> 12ad3 </v-tab-item>
                  <v-tab-item class="expand-tab-items"> 123www </v-tab-item>
                  <v-tab-item class="expand-tab-items"> 123www2222 </v-tab-item>
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
export default {
  data() {
    return {
      panel: 0,
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
  components: {},
};
</script>

<style>
</style>