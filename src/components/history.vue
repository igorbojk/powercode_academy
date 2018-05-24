<template>
    <section class="history">
        <div class="container">
            <h3>истории успеха</h3>
            <div class="slider-container">
                <div class="row">
                    <div class="col-8 offset-2 position-static">
                        <div class="slick-btn prev" @click="prev()">
                            <img src="../assets/prev.svg" alt="">
                        </div>
                        <div class="slick-btn next" @click="next()">
                            <img src="../assets/next.svg" alt="">
                        </div>
                        <slick ref="slick1" class="main-slider" :options="slickMainOptions">
                            <div class="main-slider__item">
                                <div class="desc">
                                    В июне 2017 начал обучение на курсе Java Elementary, который окончил с лучшим рейтингом в группе. Участвовал в проекте Hillel Evo и после нескольких этапов собеседований устроился на позицию Java разработчика в Приват Банк.
                                </div>
                                <div class="name">
                                    Алексей Дубинин
                                </div>
                            </div>
                            <div class="main-slider__item">
                                <div class="desc">
                                    Участвовал в проекте Hillel Evo и после нескольких этапов собеседований устроился на позицию Java разработчика в Приват Банк.
                                </div>
                                <div class="name">
                                    Алексей Дубинин
                                </div>
                            </div>
                            <div class="main-slider__item">
                                <div class="desc">
                                    В июне 2017 начал обучение на курсе Java Elementary, который окончил с лучшим рейтингом в группе. Участвовал в проекте Hillel Evo и после нескольких этапов собеседований устроился на позицию Java разработчика в Приват Банк.
                                </div>
                                <div class="name">
                                    Алексей Дубинин
                                </div>
                            </div>
                            <div class="main-slider__item">
                                <div class="desc">
                                    В июне 2017 начал обучение на курсе Java Elementary, который окончил с лучшим рейтингом в группе. Участвовал в проекте Hillel Evo и после нескольких этапов собеседований устроился на позицию Java разработчика в Приват Банк.
                                </div>
                                <div class="name">
                                    Алексей Дубинин
                                </div>
                            </div>
                            <div class="main-slider__item">
                                <div class="desc">
                                    В июне 2017 начал обучение на курсе Java Elementary, который окончил с лучшим рейтингом в группе. Участвовал в проекте Hillel Evo и после нескольких этапов собеседований устроился на позицию Java разработчика в Приват Банк.
                                </div>
                                <div class="name">
                                    Алексей Дубинин
                                </div>
                            </div>


                        </slick>
                        <slick ref="slick2" class="thumbnail-slider" :options="slickThumbnailOptions">
                            <div class="thumbnail-slider__item">
                                <div class="thumbnail-slider__avatar"></div>
                            </div>
                            <div class="thumbnail-slider__item">
                                <div class="thumbnail-slider__avatar"></div>
                            </div>
                            <div class="thumbnail-slider__item">
                                <div class="thumbnail-slider__avatar"></div>
                            </div>
                            <div class="thumbnail-slider__item">
                                <div class="thumbnail-slider__avatar"></div>
                            </div>
                            <div class="thumbnail-slider__item">
                                <div class="thumbnail-slider__avatar"></div>
                            </div>
                            <div class="thumbnail-slider__item">
                                <div class="thumbnail-slider__avatar"></div>
                            </div>
                            <div class="thumbnail-slider__item">
                                <div class="thumbnail-slider__avatar"></div>
                            </div>
                        </slick>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "history",
        components: {Slick},
        data() {
            return {
                slickMainOptions: {
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1,
                    asNavFor: '.thumbnail-slider',
                    arrows: false,
                },
                slickThumbnailOptions: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '.main-slider',
                    centerMode: true,
                    focusOnSelect: true,
                },
            }
        },
        methods: {
            next() {
                this.$refs.slick1.next();
            },

            prev() {
                this.$refs.slick1.prev();
            },

        },
    }
</script>

<style lang="scss">
    @import "../scss/_colors.scss";

    .history {
        background: $white;
        box-shadow: 0 10px 10px 0 rgba(213, 213, 213, 0.5);
        & > .container{
            padding-top: 68px;
            padding-bottom: 80px;
            position: relative;
        }
        h3 {
            text-align: center;
            margin-bottom: 64px;
        }
        .slider-container {
        }
        .slick-btn {
            width: 46px;
            height: 46px;
            position: absolute;
            top: 50%;
            margin-top: -22px;
            &:hover{
                cursor: pointer;
            }
            &.prev {
                left: 0;
            }
            &.next {
                right: 0;
            }
        }
        .main-slider{
            margin-bottom: 46px;
            &__item{
                .desc{
                    font-family: Helvetica;
                    font-size: 24px;
                    font-weight: normal;
                    font-style: oblique;
                    font-stretch: normal;
                    line-height: 1.25;
                    letter-spacing: normal;
                    text-align: center;
                    color: #4a90e2;
                    margin-bottom: 38px;
                }
                .name{
                    font-family: Helvetica;
                    font-size: 24px;
                    font-weight: bold;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    text-align: center;
                    color: #52489c;
                }
            }
        }
        .thumbnail-slider{
            &__item{
                text-align: center;
            }
            &__avatar{
                width: 96px;
                height: 96px;
                background: $blue;
                opacity: 0.5;
                border-radius: 100%;
                margin: auto;
                transform: scale(.8);
            }

            .slick-current{
                .thumbnail-slider__avatar{
                    opacity: 1;
                    transform: scale(1);
                }
            }
            &>div{
                padding: 0 !important;
            }
            .slick-list{
                padding: 0 !important;
            }
        }

    }

</style>