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

    #app {

    }
    body {
        /*background-color: lightgray !important;*/
        background-image: linear-gradient(to right, #5e79cf, #54b5c3);
    }
</style>
