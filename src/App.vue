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
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700,900|Roboto:300,400,500,700,900&subset=cyrillic,cyrillic-ext');
    #app {
        font-family: 'Roboto', sans-serif;
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
            border-radius: 30px;
            font-size: 20px;
            &.large{
                border-radius: 100px;
                padding: 16px 32px;
                font-size: 16px;
                line-height: 20px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                letter-spacing: normal;
                text-align: center;
            }
            &.small{
                font-size: 16px;
            }
            &.primary{
                background: $white;
            }
            &.secondary{
                color: $white
            }
            &.info{
                color: #5493c6;
                border-color: #5493c6;
            }
            &.register{
                color: #52489c;
                background-color: #def4ff;
                border-color: #def4ff;
                padding: 10px 20px;
                text-transform: uppercase;
            }
            &.helper{
                background: none;
                border: none;
                color: #549ee5;
                font-size: 16px;
                text-align: center;
                text-transform: none;
                padding: 0;
                width: 150px;
            }
            &.outline{
                background: none;
            }
        }
        .flex-container{
            display: flex;
        }
    }

    h1{
        font-size: 54px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.14;
        letter-spacing: normal;
        font-family: 'Montserrat', sans-serif;
    }

    h3{
        font-size: 48px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
    }

    @keyframes pulse {
       from {
           transform: scale(1);
       }
        50% {
            transform: scale(1.02);
        }
        to{
            transform: scale(1);
        }
    }

    .d-none{
        display: none;
    }

</style>
