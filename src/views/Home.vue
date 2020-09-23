<template>
    <div class="app-home mt-5">
        <div class="subject-container">
            <h1 class="title-1 mb-5">Darsni qolgan joyidan davom ettirish</h1>

            <div class="subject-wrap">

                <flickity ref="flickity" :options="flickityOptions">
                    <div class="carousel-cell">
                        <div class="card-basic mr-7">
                            <p class="para-1">Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

                            <div class="d-flex align-center justify-space-between mt-auto">
                                <h1 class="title-1 color-dark">2-dars</h1>
                                <v-btn
                                    depressed
                                    color="var(--pink)"
                                    class="reset-text-case letter-spacing-1 text-white font-600"
                                >Davom etish
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="card-basic mr-7">
                            <p class="para-1">Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

                            <div class="d-flex align-center justify-space-between mt-auto">
                                <h1 class="title-1 color-dark">2-dars</h1>
                                <v-btn
                                    depressed
                                    color="var(--pink)"
                                    class="reset-text-case letter-spacing-1 text-white font-600"
                                >Davom etish
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="card-basic mr-7">
                            <p class="para-1">Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

                            <div class="d-flex align-center justify-space-between mt-auto">
                                <h1 class="title-1 color-dark">2-dars</h1>
                                <v-btn
                                    depressed
                                    color="var(--pink)"
                                    class="reset-text-case letter-spacing-1 text-white font-600"
                                >Davom etish
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="card-basic mr-7">
                            <p class="para-1">Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

                            <div class="d-flex align-center justify-space-between mt-auto">
                                <h1 class="title-1 color-dark">2-dars</h1>
                                <v-btn
                                    depressed
                                    color="var(--pink)"
                                    class="reset-text-case letter-spacing-1 text-white font-600"
                                >Davom etish
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-cell">
                        <div class="card-basic mr-7">
                            <p class="para-1">Matematikadan oliy ta’lim muassalari uchun tayyorgarlik kursi</p>

                            <div class="d-flex align-center justify-space-between mt-auto">
                                <h1 class="title-1 color-dark">2-dars</h1>
                                <v-btn
                                    depressed
                                    color="var(--pink)"
                                    class="reset-text-case letter-spacing-1 text-white font-600"
                                >Davom etish
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </flickity>
            </div>
        </div>

        <div class="subject-chart-container mt-9">
            <h1 class="title-1 mb-5">Darsni o’zlashtirish ko’rsatkichlari</h1>

            <flickity ref="flickity2" :options="flickityOptions2">
                <div class="chart-carouse-cell">
                    <div class="chart-card mr-7">
                        <p class="para-1 dark-full text-center mb-4">Matematika</p>
                        <line-chart
                            height="250px"
                            :colors="['#FFA097']"
                            :data="{ '2017-01-01': 3, '2017-01-02': 4, '2017-01-03': 5 }"
                        ></line-chart>
                    </div>
                </div>
                <div class="chart-carouse-cell">
                    <div class="chart-card mr-7">
                        <p class="para-1 dark-full text-center mb-4">Ona tili</p>
                        <line-chart
                            height="250px"
                            :colors="['#A5D9A1']"
                            :data="{ '2017-01-01': 3, '2017-01-02': 4, '2017-01-03': 5 }"
                        ></line-chart>
                    </div>
                </div>
                <div class="chart-carouse-cell">
                    <div class="chart-card mr-7">
                        <p class="para-1 dark-full text-center mb-4">Ona tili</p>
                        <line-chart
                            height="250px"
                            :colors="['#A5D9A1']"
                            :data="{ '2017-01-01': 3, '2017-01-02': 4, '2017-01-03': 5 }"
                        ></line-chart>
                    </div>
                </div>
            </flickity>
        </div>
    </div>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
    name: "Home",
    data() {
        return {
            data: [{data: {"2017-01-01": 3, "2017-01-02": 4, "2017-01-03": 5}}],
            flickityOptions: {
                initialIndex: 1,
                prevNextButtons: false,
                pageDots: false,
                freeScroll: true,
                contain: true,
            },
            flickityOptions2: {
                initialIndex: 1,
                prevNextButtons: false,
                pageDots: false,
                contain: true,
            }
        };
    },
    components: {
        Flickity
    },
};
</script>
