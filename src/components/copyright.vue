<template>
    <section class="copyright">
        © Powered by POWERCODE
    </section>
</template>

<script>
    export default {
        name: "copyright"
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";
    .copyright{
        height: 102px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $white;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.88;
        letter-spacing: normal;
        text-align: center;
        color: #5493c6;
    }
</style>