<template>
    <div class="header">
        <div class="header__sub-block">
            <div class="header__container">
                <div class="header__contact">
                    <img :src="'icons/icon-mail.svg'" alt="mail icon">
                    <a href="mailto:student@mainacad.com">student@mainacad.com</a>
                </div>
                <div class="header__contact">
                    <img :src="'icons/icon-phone.svg'"  alt="phone icon">
                    <a href="tel:+38 (067) 225 88 77">+38 (067) 225 88 77</a>
                </div>
            </div>
        </div>
        <div class="header__container">
            <b-navbar toggleable="md">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#" class="m-auto"><img src="../assets/logo.svg" alt="powercode academy logo">
                </b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#">О нас</b-nav-item>
                        <b-nav-item href="#">Курсы</b-nav-item>
                        <b-nav-item href="#">События</b-nav-item>
                        <b-nav-item href="#">Трудоустройство</b-nav-item>
                        <b-nav-item href="#">Контакты</b-nav-item>
                        <b-nav-item href="#" class="secondary-brand">powercode.us</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>

            </b-navbar>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery/dist/jquery.js';

    export default {
        name: "app-header"
    }


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".header").addClass("scroll");
        } else {
            $(".header").removeClass("scroll");
        }
    });
</script>

<style lang="scss">
    @import "../scss/_colors.scss";

    .header {
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        padding-bottom: 18px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 997;
        transition: all .3s;
        &__container {
            max-width: 1130px;
            margin: auto;
        }
        &__sub-block{
            height: 40px;
            background: rgba(12, 22, 71, 0.1);
            margin-bottom: 18px;
            overflow: hidden;
            transition: all .3s;
            .header__container{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                height: 100%;
            }
        }
        &__contact{
            margin-left: 40px;
            opacity: 0.75;
            img{
                height: 16px;
                width: auto;
                margin-right: 10px;
            }
            a{
                font-family: Helvetica;
                font-size: 14px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #d8f6f6;
            }
        }
        &.scroll{
            padding-bottom: 8px;
            background-image: linear-gradient(to right, #5e79cf, #54b5c3);;
            .header__sub-block{
                height: 0;
                margin-bottom: 8px;
            }
        }
    }

    .navbar-light .navbar-nav .nav-link {
        color: $white;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-transform: uppercase;
        text-align: center;
    }

    .navbar-light .navbar-nav .nav-link {
        margin: 0 20px;
    }

    .navbar-light .navbar-nav .secondary-brand .nav-link {
        font-family: Helvetica;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #c1f2fe;
        font-weight: normal;
        text-transform: none ;
        margin: 0;
    }
    .navbar{
        padding: 0;
    }
</style>