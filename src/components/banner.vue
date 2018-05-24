<template>
    <section class="banner">
        <div class="large-logo">
            <img :src="'icons/large_logo.svg'" alt="">
        </div>
        <div class="container">
            <h1>Учитесь новому,<br/>
                Создавайте нужное,<br/>
                Развивайтесь с нами</h1>
            <div class="action-buttons">
                <button type="button" class="btn primary large">Записаться на курс</button>
                <button type="button" class="btn secondary large">Узнай свой уровень</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style lang="scss">
    @import "../scss/_colors.scss";
    .banner {
        min-height: 100vh;
        background-image: linear-gradient(to right, #5e79cf, #54b5c3);
        padding-top: 178px;
        position: relative;
        overflow: hidden;
        .large-logo{
            position: absolute;
            right: 0;
            top: 78px;
        }
        .container{
            position: relative;
            z-index: 2;
        }
        h1 {
            margin-top: 81px;
            font-family: Montserrat;
            font-size: 54px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.14;
            letter-spacing: normal;
            color: $white;
            margin-bottom: 80px;
        }
        .action-buttons{
            button:first-child{
                margin-right: 40px;
            }
        }

    }
</style>