<template>
    <div>
        <app-header></app-header>
        <banner></banner>
        <our-courses></our-courses>
        <events></events>
        <gallery></gallery>
        <history></history>
    </div>
</template>

<script>
    import AppHeader from './app-header.vue';
    import Banner from './banner.vue';
    import  OurCourses from './our-courses.vue';
    import Events from './events.vue';
    import Gallery from './gallery';
    import History from './history';

    export default {
        name: "app-main",
        components: {
            AppHeader,
            Banner,
            OurCourses,
            Events,
            Gallery,
            History
        }
    }
</script>

<style scoped>

</style>