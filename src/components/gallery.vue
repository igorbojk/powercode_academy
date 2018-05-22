<template>
    <section class="gallery">
        <h1>
            Галерея
        </h1>
        <div class="container-fluid">
            <div class="row gallery__row">
                <div class="col-3 bg1">
                </div>
                <div class="col-3">
                    <div class="row gallery__inner-row">
                        <div class="col-12 bg2">
                        </div>
                        <div class="col-12 bg3">
                        </div>
                    </div>
                </div>
                <div class="col-3 bg1">
                </div>
                <div class="col-3">
                    <div class="row gallery__inner-row">
                        <div class="col-12 bg2">
                        </div>
                        <div class="col-12 bg3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "gallery"
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .gallery {
        background: $white-bg;
        padding-top: 68px;
        h1{
            margin-bottom: 68px;
            text-align: center;
        }
        &__row{
            height: 840px;
        }
        &__inner-row{
            height: 100%;
        }
        .bg1{
            background: $green;
        }
        .bg2{
            background: $red;
        }
        .bg3{
            background: $blue;
        }
    }
</style>