<template>
    <div>
        <app-header></app-header>
        <banner></banner>
        <chat-btn></chat-btn>
        <!--<helper-menu></helper-menu>-->
        <our-courses></our-courses>
        <advantages></advantages>
        <events></events>
        <gallery></gallery>
        <history></history>
        <faq></faq>
        <contacts></contacts>
        <copyright></copyright>
    </div>
</template>

<script>
    import AppHeader from './app-header.vue';
    import Banner from './banner.vue';
    import ChatBtn from './chat-btn.vue';
    import OurCourses from './our-courses.vue';
    import Advantages from './advantages.vue'
    import Events from './events.vue';
    import Gallery from './gallery';
    import History from './history';
    import HelperMenu from './helper-menu.vue';
    import Faq from './faq.vue';
    import Contacts from './contacts.vue';
    import Copyright from './copyright.vue'

    export default {
        name: "app-main",
        components: {
            AppHeader,
            Banner,
            ChatBtn,
            OurCourses,
            Events,
            Gallery,
            History,
            HelperMenu,
            Faq,
            Contacts,
            Copyright,
            Advantages
        }
    }
</script>

<style scoped>

</style>