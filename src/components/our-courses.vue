<template>
    <section class="courses">
        <div class="Rectangle-4-Copy"></div>
        <div class="container">
            <h3>Наши курсы</h3>
            <div class="row courses__container">
                <div class="col-xl-4 col-md-6" v-for="(course, index) in courses" :key="index">
                    <div class="courses__item">
                        <div class="courses__item-header">
                            <div class="icon">
                                {{course.icon}}
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
                                    icon
                                </div>
                                <div class="duration__text">
                                    {{course.duration}}
                                </div>
                            </div>
                            <div class="duration">
                                <div class="duration__icon">
                                    icon
                                </div>
                                <div class="duration__text">
                                    {{course.lessons}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "our-courses",
        computed: {
            courses() {
                return this.$store.state.courses;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .courses {
        padding: 68px 0 80px;
        background: $white-bg;
        text-align: center;
        position: relative;
        overflow: hidden;
        .Rectangle-4-Copy {
            height: 1100px;
            width: 1100px;
            bottom: -100px;
            left: -1050px;
            transform: rotate(45deg);
            border-radius: 200px;
            background-color: #dfecff;
            position: absolute;
        }
        h3 {
            font-weight: 900;
            margin-bottom: 68px;
            text-transform: uppercase;
        }
        &__container {

        }
        &__item {
            background: $white;
            box-shadow: 0 10px 10px 0 rgba(214, 214, 214, 0.5);
            border-radius: 15px;
            padding: 40px;
            margin-bottom: 30px;
        }
        &__item-header {
            display: flex;
            justify-content: space-between;
            .icon {
                color: $green;
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
                    color: $primary
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