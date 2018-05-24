<template>
    <section class="faq">
        <h3>вопросы и ответы</h3>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6" v-for="(faqItem, index) of faq" :key="index">
                    <div class="faq__item">
                        <div class="flex-container">
                            <div class="faq__icon">
                                <img src="icons/block.svg" alt="">
                            </div>
                            <div class="faq__title">
                                {{faqItem.question}}
                            </div>
                        </div>
                        <div class="faq__desc">
                            {{faqItem.answer}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from 'jquery/dist/jquery.js';

    export default {
        name: "faq",
        computed: {
            faq() {
                return this.$store.state.faq;
            }
        }
    }
    $(function () {
        var faq = $('.faq .faq__desc');
        $('.faq__title').click(function () {
            faq.slideUp();
            if ($(this).parent().hasClass('active')) {
                $(this).next().slideUp();
                $(this).parent().removeClass('active');
                return false;
            }
            $('.faq .faq__item').removeClass('active');
            $(this).parent().next().slideDown();
            $(this).parent().addClass('active');
            return false;
        });
    });
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .faq {
        background: $white-bg;
        box-shadow: inset 0 10px 10px 0 rgba(213, 213, 213, 0.5);
        padding: 68px 0 75px;
        h3 {
            text-align: center;
            margin-bottom: 69px;
        }
        &__item {
            margin-bottom: 50px;
        }
        &__icon {
            margin-right: 30px;
        }
        &__title {

        }
        &__desc {
            display: none;
        }
    }
</style>