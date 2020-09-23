<template>
  <div class="system-condition-view">
    <p class="help-view-title my-10">Yo’riqnomalar</p>

    <div class="expansion-panel-wrap">
      <v-expansion-panels>
        <v-expansion-panel v-for="(item,i) in 5" :key="i">
          <v-expansion-panel-header>
            <div class="expansion--header d-flex align-center">
              <div class="circle-50 circle-50__green mr-15 d-flex align-center justify-center">
                <span>{{i + 1}}</span>
              </div>

              <p class="mb-0">Kurslardan foydalanish tartibi</p>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="expansion--body">
              <p>Tizimda bitta o’quvchi qaydnomasiga necha kishi tizim tomonidan nazorat qilinadi, agar qoidalar buzilsa kerakli choralar ko’riladi.</p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>