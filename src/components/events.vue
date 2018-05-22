<template>
    <section class="events">
        <div class="container">
            <h3>События</h3>
        </div>
        <div class="events__item-container" v-for="(event, index) in events" :key="index"
             v-b-toggle="'collapse' + index">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="event">
                            <div class="event__icon">
                                {{event.icon}}
                            </div>
                            <div class="event__title">
                                {{event.title}}
                            </div>
                            <div class="event__date">
                                <b-collapse :id="'collapse' + index" accordion="test">
                                    <div>icon</div>
                                </b-collapse>
                                <div>
                                    {{event.date}}
                                </div>
                            </div>
                            <div class="event__duration">
                                <span>
                                   <b-collapse :id="'collapse' + index" accordion="test">
                                        icon
                                    </b-collapse>
                                </span>

                                <span v-for="(duration, index) in event.duration" :key="index">{{duration}}</span>
                            </div>
                            <div class="event__price">
                                <div>
                                    {{event.price}}
                                </div>
                                <b-collapse :id="'collapse' + index" accordion="test">
                                    <div>text</div>
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
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .events {
        background-image: linear-gradient(to right, #7a76e1, #659bee);
        text-align: center;
        padding: 69px 0 74px;
        h1 {
            color: $white;
            font-weight: bold;
            margin-bottom: 68px;
        }
        .events__item-container {
            &[aria-expanded="true"]{
                background: lightgray;
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
            }
            &__title {
                font-weight: bold;
                font-size: 20px;
                flex: 4 1 auto;
                text-align: left;
            }
            &__date {
                flex: 2 1 auto;
            }
            &__duration {
                flex: 2 1 auto;
                display: flex;
                flex-wrap: wrap;
                max-width: 228px;
                span {
                    width: 100%;
                }
            }
            &__price {
                flex: 2 1 auto;
            }
        }
    }
</style>