<template>
    <section class="contacts">
        <div class="contacts__map">
            <GmapMap
                :center="mapCenter"
                :zoom="13"
                style="width: 100%; height: 100%"
            >
                <GmapMarker
                    :position="mapCenter"
                    :clickable="false"
                    :draggable="false"
                    :icon="{url: 'icons/map_marker.svg'}"
                />
            </GmapMap>
        </div>
        <div class="contacts__contact-list">
            <h3>контакты</h3>
            <b-tabs>
                <b-tab title="Киев" active @click="setMapCenter('kiev')">
                    <ul class="list">
                        <li>
                            <div class="list__icon">
                                <img :src="'icons/icon-location.svg'" alt="">
                            </div>
                            <div class="list__desc">
                                БЦ «Морион», ул. Голосеевская, 17, 8 этаж
                            </div>
                        </li>
                        <li>
                            <div class="list__icon">
                                <img :src="'icons/icon-phone.svg'" alt="">
                            </div>
                            <div class="list__desc">
                                +38 (044) 225 88 77<br/>
                                +38 (067) 225 88 77
                            </div>
                        </li>
                        <li>
                            <div class="list__icon">
                                <img :src="'icons/icon-mail.svg'" alt="">
                            </div>
                            <div class="list__desc">
                                student@mainacad.com
                            </div>
                        </li>
                    </ul>
                </b-tab>
                <b-tab title="Запорожье" @click="setMapCenter('zaporozhye')">
                    <ul class="list">
                        <li>
                            <div class="list__icon">
                                <img :src="'icons/icon-location.svg'" alt="">
                            </div>
                            <div class="list__desc">
                                другой аддрес
                            </div>
                        </li>
                        <li>
                            <div class="list__icon">
                                <img :src="'icons/icon-phone.svg'" alt="">
                            </div>
                            <div class="list__desc">
                                +38 (044) 225 88 77<br/>
                                +38 (067) 225 88 77
                            </div>
                        </li>
                        <li>
                            <div class="list__icon">
                                <img :src="'icons/icon-mail.svg'" alt="">
                            </div>
                            <div class="list__desc">
                                student@mainacad.com
                            </div>
                        </li>
                    </ul>
                </b-tab>
            </b-tabs>
            <div class="social-links">
                <a href="#" class="link">
                    <img :src="'icons/facebook.svg'" alt="facebook link">
                </a>
                <a href="#" class="link">
                    <img :src="'icons/youtube.svg'" alt="youtube link">
                </a>
                <a href="#" class="link">
                    <img :src="'icons/twitter.svg'" alt="twitter link">
                </a>
                <a href="#" class="link">
                    <img :src="'icons/instagram.svg'" alt="instagram link">
                </a>
                <a href="#" class="link">
                    <img :src="'icons/gplus.svg'" alt="gplus link">
                </a>
                <a href="#" class="link">
                    <img :src="'icons/linkedin.svg'" alt="linkedin link">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue';
    import * as VueGoogleMaps from 'vue2-google-maps';

    const CITY_COORDINATES = {
        'kiev': {lat:50.3986645, lng:30.5145269},
        'zaporozhye': {lat: 47.8159257, lng: 35.1685269}

    };

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyDOPcMkexC-Y0dYyRGe9ehXRxs67cAfR2M',
        },
    })
    export default {
        name: "contacts",
        methods: {
            setMapCenter(city) {
                this.mapCenter = CITY_COORDINATES[city];
            },
        },
        data: function() {
            return {
                mapCenter: {lat:50.2716, lng:30.3125}
            }
        }
    }
</script>

<style lang="scss">
    @import "../scss/_colors.scss";

    .contacts {
        height: 700px;
        display: flex;
        &__map {
            height: 100%;
            width: 50%;
        }
        &__contact-list {
            background-image: linear-gradient(70deg, #7343b9, #6f95fa);
            height: 100%;
            width: 50%;
            padding: 68px 65px;
            h3 {
                color: $white;
                text-align: left;
                margin-bottom: 76px;
            }
            .list {
                list-style-type: none;
                margin: 0;
                padding: 0;
                margin-bottom: 80px;
                li {
                    display: flex;
                    margin-bottom: 30px;
                }
                &__icon {
                    margin-right: 38px;
                    margin-top: 2px;
                }
                &__desc {
                    font-family: Helvetica;
                    font-size: 16px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.88;
                    letter-spacing: normal;
                    text-align: center;
                    color: $white;
                }
            }
        }
        .nav-tabs {
            border-bottom: none;
            display: flex;
            align-items: center;
            margin-bottom: 87px;
        }
        .nav-tabs .nav-link {
            background: none;
            border: none;
        }

        .nav-tabs .nav-link {
            position: relative;
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -8px;
                height: 3px;
                background: #d8f6f6;
                width: 0;
                transition: width .3s;
            }
            &:hover, &.active {
                &:after {
                    width: 100%;
                }
            }
        }
        .nav-tabs .nav-link {
            font-size: 20px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: $white;
            text-transform: uppercase;
            font-family: Helvetica;
            padding: 0;
            margin-right: 40px;
        }
        .social-links{
            display: flex;
            .link{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: $white;
                margin-right: 30px;
            }
        }
    }
</style>