<template>
    <section class="faq">
        <h3>вопросы и ответы</h3>
    </section>
</template>

<script>
    export default {
        name: "faq"
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .faq{
        background: $white-bg;
        box-shadow: inset 0 10px 10px 0 rgba(213, 213, 213, 0.5);
        padding: 68px 0 75px;
        h3{
            text-align: center;
            margin-bottom: 69px;
        }
    }
</style>