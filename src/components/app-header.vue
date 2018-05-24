<template>
    <div class="header">
        <div class="header__container">
            <b-navbar toggleable="md">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#" class="m-auto"><img src="../assets/logo.svg" alt="powercode academy logo">
                </b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#">О нас</b-nav-item>
                        <b-nav-item href="#">Курсы</b-nav-item>
                        <b-nav-item href="#">расписание</b-nav-item>
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
        padding: 40px 0;
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
        &.scroll{
            padding: 0;
            background-image: linear-gradient(to right, #5e79cf, #54b5c3);;
            .navbar-light .navbar-nav .nav-link{
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
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #c1f2fe;
        font-weight: normal;
        margin: 0;
    }
    .navbar{
        padding: 0;
    }
</style>