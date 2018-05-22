<template>
    <section class="history">
        <div class="container">
            <h1>Истории успеха</h1>
            <slick :options="slickOptions">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </slick>
        </div>
    </section>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "history",
        components: { Slick },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .history{
        background: $white;
        box-shadow: 0 10px 10px 0 rgba(213, 213, 213, 0.5);
        padding: 68px 0 80px;
        h1{
            font-weight: bold;
            text-align: center;
            margin-bottom: 64px;
        }
    }

</style>