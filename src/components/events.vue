<template>
    <section class="events">
        <div class="container">
            <h3>события</h3>
        </div>
        <div class="events__item-container" v-for="(event, index) in events" :key="index"
             v-b-toggle="'collapse' + index">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="event">
                            <div class="event__icon">
                                <img :src="'icons/' + event.icon + '.svg'" alt="">
                            </div>
                            <div class="event__title">
                                {{event.title}}
                            </div>
                            <div class="event__date">
                                <b-collapse :id="'collapse' + index" accordion="event">
                                    <img :src="'icons/rocket_2.svg'" alt="">
                                </b-collapse>
                                <div>
                                    {{event.date}}
                                </div>
                            </div>
                            <div class="event__duration">
                                <span>
                                   <b-collapse :id="'collapse' + index" accordion="event">
                                        <img :src="'icons/clock.svg'" alt="">
                                    </b-collapse>
                                </span>

                                <span v-for="(duration, index) in event.duration" :key="index">{{duration}}</span>
                            </div>
                            <div class="event__price">
                                <div>
                                    {{event.price}}
                                </div>
                                <b-collapse :id="'collapse' + index" accordion="event">
                                    <div>
                                        <button type="button" class="btn primary">Записаться</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn secondary small">Подробнее</button>
                                    </div>
                                </b-collapse>
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
        name: "events",
        computed: {
            events() {
                return this.$store.state.events;
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .events {
        background-image: linear-gradient(to right, #7a76e1, #659bee);
        text-align: center;
        padding: 69px 0 74px;
        h3 {
            color: $white;
            margin-bottom: 68px;
        }
        .events__item-container {
            &[aria-expanded="true"]{
                background: rgba(255, 255, 255, .15);
            }
        }
        .event {
            display: flex;
            padding: 20px 0;
            justify-content: space-between;
            border-bottom: solid 1px rgba(255, 255, 255, .15);
            color: $white;
            align-items: center;
            &__icon {
                color: $green;
                flex: 1 1 auto;
                text-align: left;
                width: 60px;
                text-align: center;
            }
            &__title {
                flex: 4 1 auto;
                text-align: left;
                font-size: 24px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
            }
            &__date {
                flex: 2 1 auto;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                img{
                    margin-bottom: 28px;
                }
            }
            &__duration {
                flex: 2 1 auto;
                display: flex;
                flex-wrap: wrap;
                max-width: 228px;
                width: 228px;
                span {
                    font-size: 16px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.25;
                    letter-spacing: normal;
                    text-align: center;
                    width: 100%;
                    &:first-child{
                        margin-bottom: 18px;
                    }
                }
            }
            &__price {
                flex: 2 1 auto;
                font-size: 24px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                width: 100px;
                button{
                    margin: 10px 0;
                    text-transform: none !important;
                }
            }
        }
    }
</style>