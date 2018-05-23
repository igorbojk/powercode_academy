<template>
    <section class="banner">
        <div class="rhomb-1"></div>
        <div class="rhomb-2"></div>
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
        .rhomb-1{
            position: absolute;
            width: 670px;
            height: 670px;
            transform: rotate(45deg);
            opacity: 0.2;
            border-radius: 200px;
            background-image: linear-gradient(183deg, #ebffff, rgba(210, 253, 255, 0.22));
            right: -362px;
            top: -30px;
        }
        .rhomb-2{
            position: absolute;
            width: 100vh;
            height: 100vh;
            transform: rotate(45deg);
            opacity: 0.25;
            border-radius: 150px;
            background-image: linear-gradient(175deg, rgba(39, 162, 205, 0.17), #3681c6);
            top: 0;
            right: -70vh;
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