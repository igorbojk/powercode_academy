<template>
    <div id="app">
        <app-main></app-main>
    </div>
</template>

<script>
    import appMain from './components/app-main.vue';

    export default {
        name: 'app',
        components: {
            appMain
        }
    }
</script>

<style lang="scss">
    @import "scss/_colors.scss";
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700|Roboto:300,400,500,700,900&subset=cyrillic,cyrillic-ext');
    #app {
        font-family: 'Roboto', sans-serif;
        h1,h2,h3,h4,h5,h6{
            font-family: 'Montserrat', sans-serif;
        }
        h1{
            font-size: 72px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.14;
            letter-spacing: normal;
        }
        h3{
            font-size: 48px;
            font-weight: 900;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
        }

        .btn{
            color: $primary;
            border: solid 2px $white;
            text-transform: uppercase;
            font-family: Helvetica;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #52489c;
            &.large{
                border-radius: 100px;
                padding: 24px 32px;
                font-size: 20px;
                line-height: 20px;
            }
            &.primary{
                background: $white;
            }
            &.secondary{
                color: $white;
                background: none;
            }
        }
    }

</style>
