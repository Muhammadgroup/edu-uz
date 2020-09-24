<template>
    <div class="my-courses-view mt-5">
        <div class="subject-container">
            <h1 class="title-1 mb-3 color-dark">Mening kurslarim</h1>

            <div class="subject-wrap">
                <flickity ref="flickity2" :options="flickityOptions">
                    <div class="carousel-cell cell-height mr-10">
                        <div class="courses-card">
                            <div class="course-card-img">
                                <img class="img-cover" src="@/assets/img/course-img-2.png" alt="">
                            </div>

                            <p>
                                Rassomchilik
                            </p>

                            <div class="course-progress d-flex">
                                <div class="course-progress-track mr-3">
                                    <div class="progress-track d-flex align-center justify-center" style="width: 43%">
                                        <span class="progress-text font-600 text-white">43%</span>
                                    </div>
                                </div>
                                <div class="course-progress-button">
                                    <v-btn
                                        depressed
                                        color="#83D2B7"
                                        class="text-white font-600 reset-text-case"
                                    >
                                        Davom etish
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-cell cell-height mr-10">
                        <div class="courses-card">
                            <div class="course-card-img">
                                <img class="img-cover" src="@/assets/img/course-img-1.png" alt="">
                            </div>

                            <p>
                                Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi
                            </p>

                            <div class="course-progress d-flex">
                                <div class="course-progress-track mr-3">
                                    <div class="progress-track d-flex align-center justify-center" style="width: 25%">
                                        <span class="progress-text text-white">25%</span>
                                    </div>
                                </div>
                                <div class="course-progress-button">
                                    <v-btn
                                        color="#83D2B7"
                                        depressed
                                        class="text-white font-600 reset-text-case"
                                    >
                                        Davom etish
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </flickity>
            </div>
        </div>

        <div class="subject-container mt-10">
            <div class="d-flex align-center justify-space-between">
                <h1 class="title-1 mb-3 color-dark">Barcha kurslar</h1>

                <router-link to="/" class="read-more-anchor font-600 color-dark-green text-decoration-none">
                    Barchasini ko'rish
                </router-link>
            </div>

            <flickity ref="flickity2" :options="flickityOptions">
                <div class="flickity-card">
                    <div class="flickity-card-img">
                        <img src="@/assets/img/course-img-2.png" class="img-cover" alt="">
                    </div>
                </div>
            </flickity>
        </div>
    </div>
</template>

<script>
import flickity from 'vue-flickity';

export default {
    name: "index",
    data() {
        return {
            flickityOptions: {
                initialIndex: 1,
                prevNextButtons: false,
                pageDots: false,
                freeScroll: true,
                contain: true,
                cellAlign: 'left'
            },
        }
    },
    components: {
        flickity
    }
}
</script>

<style scoped>

</style>