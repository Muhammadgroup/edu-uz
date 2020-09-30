<template>
  <div class="library-show-view mt-5">
    <div class="app-table-wrap">
      <table class="app-table w-100">
        <thead class="app-table-thead">
          <tr>
            <th></th>
            <th class="text-left">Fayl nomi</th>
            <th class="desktop-visible">Qo’shilgan vaqti</th>
            <th>Xajmi</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="app-table-tbody">
          <tr>
            <td style="width: 80px">
              <img src="@/assets/img/icons/icon-33.svg" alt />
            </td>
            <td class="text-left">Abituriyent gazetasi 1</td>
            <td class="desktop-visible">11.09.2020</td>
            <td>34Mb</td>
            <td>
              <router-link to="/" class="download-button d-block text-decoration-none">
                <v-btn
                  depressed
                  dark
                  class="reset-text-case font-400"
                  color="var(--pink)"
                >
                    <div class="desktop-text">Yuklab olish</div>
                    <img class="mobile-download-icon" src="@/assets/img/icons/icon-43.svg" alt="">
                </v-btn>
              </router-link>
            </td>
          </tr>

          <tr>
            <td style="width: 80px">
              <img src="@/assets/img/icons/icon-33.svg" alt />
            </td>
            <td class="text-left">Abituriyent gazetasi 1</td>
            <td class="desktop-visible">11.09.2020</td>
            <td>34Mb</td>
            <td>
              <router-link to="/" class="download-button d-block text-decoration-none">
                <v-btn
                  depressed
                  dark
                  class="reset-text-case font-400"
                  color="var(--pink)"
                >
                    <div class="desktop-text">Yuklab olish</div>
                    <img class="mobile-download-icon" src="@/assets/img/icons/icon-43.svg" alt="">
                </v-btn>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="app-pagenation">
        <v-pagination
          v-model="page"
          color="var(--green)"
          class="my-4"
          :length="15"
          :total-visible="7"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style>
</style>