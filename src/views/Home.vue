<template>
  <div class="app-home mt-5">
    <div class="subject-container">
      <h1 class="title-1 mb-4">Darsni qolgan joyidan davom ettirish</h1>

      <div class="subject-wrap">
        <v-row>
          <v-col xl="3">
            <div class="card-basic">
              <p class="para-1">Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

              <div class="d-flex align-center justify-space-between mt-auto">
                <h1 class="title-1 color-dark">2-dars</h1>
                <v-btn
                  depressed
                  color="var(--pink)"
                  class="reset-text-case letter-spacing-1 text-white font-600"
                >Davom etish</v-btn>
              </div>
            </div>
          </v-col>
          <v-col xl="3">
            <div class="card-basic">
              <p class="para-1">Ona tilidan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

              <div class="d-flex align-center justify-space-between mt-auto">
                <h1 class="title-1 color-dark">5-dars</h1>
                <v-btn
                  depressed
                  color="var(--pink)"
                  class="reset-text-case letter-spacing-1 text-white font-600"
                >Davom etish</v-btn>
              </div>
            </div>
          </v-col>
          <v-col xl="3">
            <div class="card-basic">
              <p class="para-1">Ona tilidan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

              <div class="d-flex align-center justify-space-between mt-auto">
                <h1 class="title-1 color-dark">3-dars</h1>
                <v-btn
                  depressed
                  color="var(--pink)"
                  class="reset-text-case letter-spacing-1 text-white font-600"
                >Davom etish</v-btn>
              </div>
            </div>
          </v-col>
          <v-col xl="3">
            <div class="card-basic">
              <p
                class="para-1"
              >Ona tilidan oliy ta’lim muassalari uchun tayyorgarlik kursi oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

              <div class="d-flex align-center justify-space-between mt-auto">
                <h1 class="title-1 color-dark">1-dars</h1>
                <v-btn
                  depressed
                  color="var(--pink)"
                  class="reset-text-case letter-spacing-1 text-white font-600"
                >Davom etish</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="subject-chart-container mt-9">
      <h1 class="title-1 mb-4">Darsni o’zlashtirish ko’rsatkichlari</h1>

      <v-row>
        <v-col lg="6">
          <div class="chart-card">
            <p class="para-1 dark-full text-center mb-4">Matematika</p>
            <line-chart
              height="235px"
              :colors="['#FFA097']"
              :data="{ '2017-01-01': 3, '2017-01-02': 4, '2017-01-03': 5 }"
            ></line-chart>
          </div>
        </v-col>

        <v-col lg="6">
          <div class="chart-card">
            <p class="para-1 dark-full text-center mb-4">Ona tili</p>
            <line-chart
              height="235px"
              :colors="['#A5D9A1']"
              :data="{ '2017-01-01': 3, '2017-01-02': 4, '2017-01-03': 5 }"
            ></line-chart>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      data: [{ data: { "2017-01-01": 3, "2017-01-02": 4, "2017-01-03": 5 } }],
    };
  },
  components: {},
};
</script>
