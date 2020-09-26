<template>
  <div class="course-info-view mt-12">
    <div class="course-info-header d-flex">
      <div class="course-info-img mr-5">
        <div class="course-info-banner w-100 h-100">
          <img src="@/assets/img/course-img-1.png" class="d-block img-cover" alt />
        </div>
      </div>
      <div class="course-info-meta">
        <h1
          class="color-dark font-700"
        >Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</h1>
        <div class="course-info-owner d-flex align-center my-4">
          <p class="mb-0 color-grey font-600 mr-3">Muallif:</p>
          <span class="color-dark font-600">Nazar Nazarov</span>
        </div>
        <div class="course-info-raiting d-flex align-center">
          <span class="mr-1 color-dark font-600">4.5</span>
          <div class="course-stars">
            <v-rating
              v-model="rating"
              color="#A5D9A1"
              background-color="#C4C4C4"
              half-increments
              size="25"
              :readonly="true"
            ></v-rating>
          </div>
          <p class="mb-0 ml-1 color-dark">(31ta ovoz)</p>
        </div>
        <p class="dark-full mt-3">304ta qatnashchi</p>

        <div class="coures-info-more mt-10 d-flex">
          <div class="course-more-button mr-12">
            <v-btn color="var(--pink)" dark large>Boshlash</v-btn>
          </div>
          <div class="course-info-cost">
            <p class="color-dark text-decoration-line-through">600 000 so’m</p>
            <p class="mb-0 color-dark">400 000 so’m</p>
          </div>
        </div>
      </div>
    </div>

    <div class="course-info-content mt-10">
      <div class="course-info-tabs">
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab>
            <span class="reset-text-case letter-spacing-1">Kurs haqida</span>
          </v-tab>
          <v-tab>
            <span class="reset-text-case letter-spacing-1">O’qituvchi</span>
          </v-tab>
          <v-tab>
            <span class="reset-text-case letter-spacing-1">Mundarija</span>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="course-tab-content">
          <v-tab-item>
            <div class="course-tab-box">
              <p class="font-500 dark-full pb-1">Kursdan o’rganiladigan bilimlar</p>

              <div class="course-tab-check d-flex flex-wrap">
                <div class="tab-check-items d-flex align-center mb-4">
                  <img src="@/assets/img/icons/icon-26.svg" class="mr-5" alt />
                  <span class="d-block mt-1">Chuqurlashtirilgan matematika</span>
                </div>

                <div class="tab-check-items d-flex align-center mb-4">
                  <img src="@/assets/img/icons/icon-26.svg" class="mr-5" alt />
                  <span class="d-block mt-1">Test yechishga tayyorgarlik</span>
                </div>

                <div class="tab-check-items d-flex align-center mb-4">
                  <img src="@/assets/img/icons/icon-26.svg" class="mr-5" alt />
                  <span class="d-block mt-1">Vaqt bilan to’g’ri muomala qilish</span>
                </div>

                <div class="tab-check-items d-flex align-center mb-4">
                  <img src="@/assets/img/icons/icon-26.svg" class="mr-5" alt />
                  <span class="d-block mt-1">Ortiqcha formulalarsiz</span>
                </div>
              </div>
            </div>

            <div class="course-need">
              <p>O’quvchilar uchun talablar</p>

              <ul>
                <li>
                  <p>internet</p>
                </li>
                <li>
                  <p>shaxsiy kompyuter yoki mobil telefon</p>
                </li>
                <li>
                  <p>o’zbek tili</p>
                </li>
              </ul>

              <p>Kurs haqida ma’lumot</p>

              <div class="course-need-content">
                <p>Oliy ta’lim muassalariga, chet el ta’lim dargohlariga , harbiy oliy bilim yurtlariga o’qishga topshirish istagida bo’lganlar uchun to’liq mavzulashtirilgan kurs</p>

                <p>
                  Kurs davomiyligi 10oyni tashkil etadi. Kurs modullarga bo’lingan holda olib boriladi, modul 1oyga mo’ljallangan demak 10ta modul mavjud, har bir modulda 12tadan dars bo’lib darslar intensiv tarzda o’tiladi, dars so’ngida test bilan o’zlashtirish natijalari hisoblab boriladi,
                  <span>belgilangan ballni yig’a olmasangiz keyngi darsga va keyngi modulga o’ta olmaysiz</span>. kurs uchun to’lovlar xar bir modul uchun alohida to’lash imkoniyati mavjud.
                </p>

                <p>Har oy kurs mualliflari tomonidan umumiy test olinadi, olingan test natijalari asosida reyting jadval yuritiladi.</p>

                <p>O’zlashtirishi past bo’lgan bollar bilan alohida zoom dasturi orqali alohida shug’ullaniladi. Biriktirilgan mentorlar bilan to’g’ridan to’g’ri muloqot qilish imkoniyati mavjud.</p>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="course-need-content">
              <p>htmlda formatlangan text bo’ladi</p>

              <p>Oliy ta’lim muassalariga, chet el ta’lim dargohlariga , harbiy oliy bilim yurtlariga o’qishga topshirish istagida bo’lganlar uchun to’liq mavzulashtirilgan kurs.</p>

              <p>Har oy kurs mualliflari tomonidan umumiy test olinadi, olingan test natijalari asosida reyting jadval yuritiladi.</p>

              <p>O’zlashtirishi past bo’lgan bollar bilan alohida zoom dasturi orqali alohida shug’ullaniladi. Biriktirilgan mentorlar bilan to’g’ridan to’g’ri muloqot qilish imkoniyati mavjud.</p>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="course-need-content">
              <p>htmlda formatlangan text bo’ladi</p>

              <p>Oliy ta’lim muassalariga, chet el ta’lim dargohlariga , harbiy oliy bilim yurtlariga o’qishga topshirish istagida bo’lganlar uchun to’liq mavzulashtirilgan kurs.</p>

              <p>Har oy kurs mualliflari tomonidan umumiy test olinadi, olingan test natijalari asosida reyting jadval yuritiladi.</p>

              <p>O’zlashtirishi past bo’lgan bollar bilan alohida zoom dasturi orqali alohida shug’ullaniladi. Biriktirilgan mentorlar bilan to’g’ridan to’g’ri muloqot qilish imkoniyati mavjud.</p>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      rating: 2.5,
    };
  },
};
</script>

<style>
</style>