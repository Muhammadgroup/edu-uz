<template>
  <div class="app-login">
    <v-tabs v-model="tab" class="login-tabs">
      <v-tab href="#tab-1" class="tab-items">
        <span>KIRISH</span>
      </v-tab>

      <v-tab href="#tab-2" class="tab-items">
        <span>RO’YXATDAN O’TISH</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :value="'tab-1'">
        <v-card flat>
          <v-card-text>
            <LoginTabItem />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-2'">
        <v-card flat>
          <v-card-text>
            <RegistrationTabItem />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import LoginTabItem from "./components/LoginTabItem";
import RegistrationTabItem from "./components/RegistrationTabItem";

export default {
  data() {
    return {
      tab: null,
    };
  },
  components: {
    LoginTabItem,
    RegistrationTabItem,
  },
};
</script>

<style>
</style>