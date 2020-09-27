<template>
  <div class="tests-view mt-5">
    <div class="app-table-wrap">
      <table class="app-table w-100">
        <thead class="app-table-thead">
          <tr>
            <th></th>
            <th>Yo’nalish</th>
            <th>Turi</th>
            <th>Sana</th>
            <th>Davomiyligi</th>
            <th>Narxi</th>
            <th>
              <router-link
                :to="{ name: 'liderBoard' }"
                class="d-block text-decoration-none"
              >
                <v-btn
                  depressed
                  dark
                  class="reset-text-case font-400 letter-spacing-1"
                  color="var(--pink)"
                  >Reyting doska</v-btn
                >
              </router-link>
            </th>
          </tr>
        </thead>
        <tbody class="app-table-tbody">
          <tr>
            <td style="width: 80px">
              <img src="@/assets/img/icons/icon-27.svg" alt />
            </td>
            <td>Matematika</td>
            <td>Ochiq</td>
            <td>12 sentabr 08:00</td>
            <td>00:08:00</td>
            <td>Bepul</td>
            <td>
              <router-link
                :to="{ name: 'course-start' }"
                class="d-block text-decoration-none"
              >
                <v-btn
                  depressed
                  dark
                  class="reset-text-case font-400 letter-spacing-1"
                  color="var(--green)"
                  >Boshlash</v-btn
                >
              </router-link>
            </td>
          </tr>

          <tr>
            <td style="width: 80px">
              <img src="@/assets/img/icons/icon-27.svg" alt />
            </td>
            <td>Matematika</td>
            <td>Ochiq</td>
            <td>12 sentabr 08:00</td>
            <td>00:08:00</td>
            <td>Bepul</td>
            <td>
              <router-link
                :to="{ name: 'course-start' }"
                class="d-block text-decoration-none"
              >
                <v-btn
                  depressed
                  dark
                  class="reset-text-case font-400 letter-spacing-1"
                  color="var(--green)"
                  >Boshlash</v-btn
                >
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>