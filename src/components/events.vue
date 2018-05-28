<template>
    <section class="events">
        <div class="container">
            <h3>события</h3>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="event" v-for="(event, index) in events" :key="index">
                        <div class="event__icon">
                            <img :src="'icons/' + event.icon + '.svg'" alt="">
                        </div>
                        <div class="event__info">
                            <div class="flex-container">
                                <div class="event__title">
                                    {{event.title}}
                                </div>
                                <div class="event__price">
                                    <div>
                                        {{event.price}}
                                        <span class="currency">
                                    грн.
                                </span>
                                    </div>
                                </div>
                                <button type="button" class="btn register small">Записаться</button>
                            </div>
                            <div class="flex-container">
                                <div class="event__date">
                                    <div class="icon">
                                        <img :src="'icons/event_icon.svg'" alt="">
                                    </div>
                                    <div>
                                        {{event.date}}
                                    </div>
                                </div>
                                <button type="button" class="btn helper">Подробнее &#8594;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn outline large info">еще события</button>
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
        background: $white-bg;
        text-align: center;
        padding: 69px 0 74px;
        h3 {
            margin-bottom: 68px;
        }
        .event {
            background: $white;
            box-shadow: 0 5px 15px 0 rgba(173, 173, 173, 0.5);
            border-radius: 40px;
            padding: 30px 40px;
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: box-shadow .3s ease-in-out;
            &:hover{
                box-shadow: 0 10px 25px 0 rgba(173, 173, 173, 0.75);
                cursor: pointer;
            }
            &:last-child{
                margin-bottom: 60px;
            }
            .flex-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &:first-child{
                    margin-bottom: 30px;
                }
            }
            &__icon {
                color: $green;
                flex: 1 1 auto;
                text-align: left;
                max-width: 60px;
                text-align: center;
            }
            &__info{
                flex: 1 1 auto;
                padding-left: 50px;
                text-align: left;
            }
            &__title {
                text-align: left;
                font-size: 24px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
            }
            &__date {
                text-align: left;
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #52489c;
                img {
                    margin-right: 20px;
                }
            }
            &__price {
                font-size: 24px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                text-align: center;
                color: #5248b9;
                .currency{
                    font-size: 16px;
                }
            }
            &__action-buttons{
                .register {
                    margin-bottom: 22px;
                }
            }
        }
    }
</style>