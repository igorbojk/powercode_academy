<template>
    <div>
        <app-header></app-header>
        <banner></banner>
        <helper-menu></helper-menu>
        <our-courses></our-courses>
        <events></events>
        <gallery></gallery>
        <history></history>
        <faq></faq>
    </div>
</template>

<script>
    import AppHeader from './app-header.vue';
    import Banner from './banner.vue';
    import  OurCourses from './our-courses.vue';
    import Events from './events.vue';
    import Gallery from './gallery';
    import History from './history';
    import HelperMenu from './helper-menu.vue';
    import Faq from './faq.vue'

    export default {
        name: "app-main",
        components: {
            AppHeader,
            Banner,
            OurCourses,
            Events,
            Gallery,
            History,
            HelperMenu,
            Faq
        }
    }
</script>

<style scoped>

</style>