<template>
    <div class="header">
        <div class="header__container">
            <b-navbar toggleable="md">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#" class="m-auto">Powercode academy</b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav class="m-auto">
                        <b-nav-item href="#">О нас</b-nav-item>
                        <b-nav-item href="#">Курсы</b-nav-item>
                        <b-nav-item href="#">Трудоустройство</b-nav-item>
                        <b-nav-item href="#">Контакты</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>
                <b-navbar-brand href="#" class="m-auto">powercode.us</b-navbar-brand>

            </b-navbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-header"
    }
</script>

<style lang="scss">
@import "../scss/_colors.scss";

.header{
    border-bottom: 1px solid rgba(255,255,255,.2);
    padding: 40px 0;
    &__container{
        max-width: 1170px;
        margin: auto;
    }
}
.navbar-light .navbar-nav .nav-link{
    color: $white;
}
.navbar-light .navbar-nav .nav-link{
    margin: 0 20px;
}
</style>