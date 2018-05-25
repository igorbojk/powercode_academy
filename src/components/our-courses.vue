<template>
    <section class="courses">

        <div class="container">
            <h3>Наши курсы</h3>
            <div class="courses__tabs">
                <span class="tab" @click="filterCourses('kiev')" v-bind:class="{ active: activeCity === 'kiev' }">
                    Киев
                </span>
                <span class="tab" @click="filterCourses('zaporozhye')"
                      v-bind:class="{ active: activeCity === 'zaporozhye' }">
                    Запорожье
                </span>
            </div>
            <transition-group name="fade" tag="div" class="row courses__container">
                <div class="col-xl-4 col-md-6" v-for="course in courses" :key="course.id">
                    <div class="courses__item">
                        <div class="courses__item-header">
                            <div class="icon">
                                <img :src="'icons/' + course.icon + '.svg'" alt="">
                            </div>
                            <div class="level">
                                {{course.level}}
                            </div>
                        </div>
                        <div class="courses__item-title">
                            {{course.title}}
                        </div>
                        <div class="courses__item-duration">
                            <div class="duration">
                                <div class="duration__icon">
                                    <img :src="'icons/calendar.svg'" alt="">
                                </div>
                                <div class="duration__text">
                                    {{course.duration}}
                                </div>
                            </div>
                            <div class="duration">
                                <div class="duration__icon">
                                    <img :src="'icons/clock_2.svg'" alt="">
                                </div>
                                <div class="duration__text">
                                    {{course.lessons}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>

        </div>
    </section>

</template>

<script>
    export default {
        name: "our-courses",
        computed: {
            courses() {
                return this.$store.state.filteredCourses;
            },
        },
        mounted() {
            this.$store.dispatch('changeCity', 'kiev');
        },
        methods: {
            filterCourses(city) {
                this.activeCity = city;
                this.$store.dispatch('changeCity', city);
            }
        },
        data() {
            return {
                activeCity: 'kiev',
                idx: 0,
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .fade-enter-active {
        animation: fade-in .9s ;
    }

    .fade-leave-active {
        display: none;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .courses {
        padding: 68px 0 80px;
        background: $white-bg;
        text-align: center;
        position: relative;
        overflow: hidden;

        h3 {
            font-weight: 900;
            margin-bottom: 45px;
            text-transform: uppercase;
        }
        &__tabs {
            text-align: center;
            margin-bottom: 50px;
            .tab {
                margin: 0 20px;
                font-family: Helvetica;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: #5493c6;
                position: relative;
                &:after {
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    width: 0;
                    transition: width .3s ease-in-out;
                    height: 2px;
                    background: #5493c6;
                }
                &:hover, &.active {
                    cursor: pointer;
                    &:after {
                        width: 100%;
                    }
                }
            }
        }
        &__container {

        }
        &__item {
            background: $white;
            box-shadow: 0 10px 10px 0 rgba(214, 214, 214, 0.5);
            border-radius: 15px;
            padding: 40px;
            margin-bottom: 30px;
            /*transition: all .3s;*/
            &:hover {
                /*margin-top: -15px;
                margin-left: -15px;
                margin-right: -15px;
                margin-bottom: -15px;
                padding: 55px;*/
                cursor: pointer;
            }
        }
        &__item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            .icon {
            }
            .level {
                text-transform: uppercase;
                color: $primary;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.25;
                letter-spacing: normal;
            }
        }
        &__item-title {
            color: $black;
            margin: 70px 0 48px;
            font-size: 24px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.25;
            letter-spacing: normal;
            text-align: center;
        }
        &__item-duration {
            display: flex;
            justify-content: center;
            .duration {
                margin: 0 20px;
                &__icon {
                    color: $primary;
                    margin-bottom: 13px;
                }
                &__text {
                    color: $primary;
                    font-size: 16px;
                    font-weight: bold;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.25;
                    letter-spacing: normal;
                }
            }
        }
    }

</style>