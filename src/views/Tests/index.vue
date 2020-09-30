<template>
  <div class="tests-view mt-5">
    <div class="app-table-wrap">
      <table class="app-table w-100">
        <tbody class="app-table-tbody">
          <tr>
            <td style="width: 80px">
              <router-link :to="{name: 'testShow'}" class="d-block text-decoration-none">
                <img src="@/assets/img/icons/icon-28.svg" alt />
              </router-link>
            </td>
            <td class="text-left">
              <router-link
                :to="{name: 'testShow'}"
                class="d-block text-decoration-none color-dark"
              >Super testlar</router-link>
            </td>
          </tr>

          <tr>
            <td style="width: 80px">
              <router-link :to="{name: 'testShow'}" class="d-block text-decoration-none">
                <img src="@/assets/img/icons/icon-28.svg" alt />
              </router-link>
            </td>
            <td class="text-left">
              <router-link
                :to="{name: 'testShow'}"
                class="d-block text-decoration-none color-dark"
              >Blok testlar</router-link>
            </td>
          </tr>

          <tr>
            <td style="width: 80px">
              <router-link :to="{name: 'testShow'}" class="d-block text-decoration-none">
                <img src="@/assets/img/icons/icon-28.svg" alt />
              </router-link>
            </td>
            <td class="text-left">
              <router-link
                :to="{name: 'testShow'}"
                class="d-block text-decoration-none color-dark"
              >Mavzulashtirilgan testlar</router-link>
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