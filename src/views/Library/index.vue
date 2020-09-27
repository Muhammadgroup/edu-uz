<template>
  <div class="library-view mt-9">
    <div class="app-table-wrap">
      <table class="app-table w-100">
        <tbody class="app-table-tbody">
          <tr>
            <td style="width: 50px">
              <router-link :to="{name: 'show-library'}" class="d-block text-decoration-none">
                <img src="@/assets/img/icons/icon-32.svg" alt />
              </router-link>
            </td>
            <td class="text-left">
              <router-link
                :to="{name: 'show-library'}"
                class="d-block text-decoration-none color-dark"
              >Testlar</router-link>
            </td>
          </tr>

          <tr>
            <td style="width: 50px">
              <router-link :to="{name: 'show-library'}" class="d-block text-decoration-none">
                <img src="@/assets/img/icons/icon-32.svg" alt />
              </router-link>
            </td>
            <td class="text-left">
              <router-link
                :to="{name: 'show-library'}"
                class="d-block text-decoration-none color-dark"
              >To’plamlar</router-link>
            </td>
          </tr>

          <tr>
            <td style="width: 50px">
              <router-link :to="{name: 'show-library'}" class="d-block text-decoration-none">
                <img src="@/assets/img/icons/icon-32.svg" alt />
              </router-link>
            </td>
            <td class="text-left">
              <router-link
                :to="{name: 'show-library'}"
                class="d-block text-decoration-none color-dark"
              >Kitoblar</router-link>
            </td>
          </tr>

          <tr>
            <td style="width: 50px">
              <router-link :to="{name: 'show-library'}" class="d-block text-decoration-none">
                <img src="@/assets/img/icons/icon-32.svg" alt />
              </router-link>
            </td>
            <td class="text-left">
              <router-link
                :to="{name: 'show-library'}"
                class="d-block text-decoration-none color-dark"
              >Foydali</router-link>
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