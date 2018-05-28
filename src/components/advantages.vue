<template>
    <section class="advantages">
        <h3>наши преимущества</h3>
        <div class="container">
            <div class="row">
                <div class="advantages__info" v-bind:class="{ hovered: upHere }">
                    <img :src="'path.svg'" alt="" class="advantages__bg">
                    <div class="advantages__list">
                        <div class="advantages__item" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
                            <div class="icon">
                                <img :src="'icons/grow.png'" alt="grow icon">
                            </div>
                            <div class="info">
                                <div class="title">
                                    Мы ищем таланты
                                    <div class="desc">
                                        Мы даем тебе 100% гарантию
                                        трудоустройства, главное - будь лучшим!
                                    </div>
                                </div>
                            </div>
                            <div class="advantages__sub-items bottom">
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/grow_filled.svg'" alt="grow_filled icon">
                                        <div class="desc">
                                            PowerCode Academy
                                            это подразделение
                                            IT компании PowerCode
                                        </div>
                                    </div>
                                </div>
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/rocket.svg'" alt="rocket icon">
                                        <div class="desc">
                                            Наша цель – дать
                                            максимальный импульс
                                            твоей успешной карьере в IT
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="advantages__item" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
                            <div class="icon">
                                <img :src="'icons/king.svg'" alt="king icon">
                            </div>
                            <div class="info">
                                <div class="title">
                                    Профессионализм
                                    преподавателей
                                    <div class="desc">
                                        Это залог успешного старта
                                        карьеры в IT
                                    </div>
                                </div>
                            </div>
                            <div class="advantages__sub-items bottom">
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/funds.svg'" alt="funds icon">
                                        <div class="desc">
                                            Мы научим тебя тому,
                                            за что будем тебе платить
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="advantages__item" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
                            <div class="icon">
                                <img :src="'icons/english.svg'" alt="english icon">
                            </div>
                            <div class="info">
                                <div class="title">
                                    Улучшай свой
                                    английский
                                    <div class="desc">
                                        Курсы IT английского
                                        для слушателей
                                        PowerCode Academy
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="advantages__item" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
                            <div class="icon">
                                <img :src="'icons/online.svg'" alt="online icon">
                            </div>
                            <div class="info">
                                <div class="title">
                                    Онлайн и офлайн
                                    обучение
                                </div>
                            </div>
                            <div class="advantages__sub-items top">
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/video-camera.svg'" alt="video-camera icon">
                                        <div class="desc">
                                            Видео записи курсов
                                            в личном кабинете
                                        </div>
                                    </div>
                                </div>
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/consultation.svg'" alt="consultation icon">
                                        <div class="desc">
                                            Консультации между
                                            занятиями онлайн
                                        </div>
                                    </div>
                                </div>
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/homework.svg'" alt="homework icon">
                                        <div class="desc">
                                            Домашние
                                            задания
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="advantages__item" @mouseover="mouseOver($event)" @mouseleave="mouseLeave($event)">
                            <div class="icon">
                                <img :src="'icons/community.svg'" alt="grow icon">
                            </div>
                            <div class="info">
                                <div class="title">
                                    PowerCode
                                    Community
                                    <div class="desc">
                                        Учась у нас, ты<br/>
                                        становишься частью<br/>
                                        нашей команды.
                                    </div>
                                </div>
                            </div>
                            <div class="advantages__sub-items top">
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/events.svg'" alt="event icon">
                                        <div class="desc">
                                            участвовать
                                            в наших ивентах
                                        </div>
                                    </div>
                                </div>
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/webinar.svg'" alt="webinar icon">
                                        <div class="desc">
                                            проходить вебинары,
                                        </div>
                                    </div>
                                </div>
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/discuss.svg'" alt="discuss icon">
                                        <div class="desc">
                                            задавать
                                            интересующие тебя
                                            вопросы,
                                        </div>
                                    </div>
                                </div>
                                <div class="advantages__sub-item">
                                    <div class="icon">
                                        <img :src="'icons/communication.svg'" alt="communication icon">
                                        <div class="desc">
                                            С первого занятия у тебя
                                            будет возможность
                                            общаться с нашими
                                            сотрудниками,
                                        </div>
                                    </div>
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
    import $ from 'jquery/dist/jquery.js';

    export default {
        name: "advantages",
        data() {
            return {
                upHere: false
            }
        },
        methods: {
            mouseOver(event) {
                this.upHere = true;
                $( "div:animated" ).stop(true, true);
                if (event.target.tagName !== 'IMG') {
                    return;
                }
                const target = $(event.target).closest('.advantages__item');
                target.find('.advantages__sub-items').stop(true, true).slideDown();
            },
            mouseLeave(event) {
                this.upHere = false;
                const target = $(event.target).closest('.advantages__item');
                target.find('.advantages__sub-items').stop(true, true).slideUp();
            }
        }
    }

</script>

<style lang="scss">
    @import "../scss/_colors.scss";

    .advantages {
        padding: 47px 0 60px;
        background: url('../assets/triangles_features.svg') no-repeat right top, linear-gradient(to right, #4252d1, #609bdb);
        min-height: 825px;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("../assets/pattern.svg");
            opacity: 0.07;
        }
        h3 {
            margin-bottom: 60px;
            color: $white;
        }
        &__info {
            height: 600px;
            position: relative;
            &.hovered {
                .advantages__bg,
                .advantages__item {
                    opacity: 0.06;
                }
            }
        }
        &__bg {
            position: absolute;
            top: 90px;
            left: 110px;
            transition: opacity .3s;
        }
        &__list {
            position: relative;
            z-index: 1;
        }
        &__item {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            position: relative;
            transition: opacity .3s;
            &:hover {
                cursor: pointer;
                opacity: 1 !important;
                .info {
                    .desc {
                        opacity: 1;
                    }
                }

            }
            &:nth-child(2) {
                margin-left: 200px;
            }
            &:nth-child(3) {
                margin-left: 400px;
            }
            &:nth-child(4) {
                margin-left: 600px;
            }
            &:nth-child(5) {
                margin-left: 800px;
                .info {
                    .desc {
                        width: 200px;
                    }
                }
            }
            .info {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 120px;
                padding-left: 20px;
                font-family: Roboto;
                font-size: 24px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                color: $white;
                display: flex;
                align-items: center;
                width: 238px;
                pointer-events: none;
                .title {
                    position: relative;
                }
                .desc {
                    position: absolute;
                    top: 100%;
                    margin-top: 10px;
                    font-family: Helvetica;
                    font-size: 20px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: normal;
                    color: #c1f2fe;
                    width: 400px;
                    opacity: 0;
                    transition: opacity .3s;
                }
            }
        }
        &__sub-items {
            position: absolute;
            left: 0;
            right: 0;
            display: none;
            &.bottom {
                top: 120px;
                .advantages__sub-item {
                    padding-top: 40px;
                }
            }
            &.top {
                bottom: 120px;
                .advantages__sub-item {
                    padding-bottom: 40px;
                }
            }
        }
        &__sub-item {
            position: relative;
            margin: auto;
            pointer-events: none;
            &:before {
                content: '';
                width: 1px;
                left: 50%;
                transform: translateX(-50%);
                top: 0;
                bottom: 0;
                background: #8dceff;
                position: absolute;
            }
            .icon {
                width: 80px;
                height: 80px;
                background: #8dceff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3;
                position: relative;
                margin: auto;
            }
            .desc {
                font-family: Roboto;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #c1f2fe;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 80px;
                padding-left: 40px;
                display: flex;
                align-items: center;
                width: 258px;
                pointer-events: none;
            }
        }
    }
</style>