<template>
    <div class="helper">
        <div class="helper__element orange">
            <div class="helper__element__content">
                <div class="helper__element__icon">
                    <img src="../assets/telephone.svg" alt="telephone icon">
                </div>
                <div class="helper__element__text">
                    Обратный звонок
                </div>
            </div>
        </div>
        <div class="helper__element green active">
            <div class="helper__element__content">
                <div class="helper__element__icon">
                    <img src="../assets/telephone.svg" alt="telephone icon">
                </div>
                <div class="helper__element__text">
                    Обратный звонок
                </div>
            </div>
        </div>
        <div class="helper__element blue">
            <div class="helper__element__content">
                <div class="helper__element__icon">
                    <img src="../assets/telephone.svg" alt="telephone icon">
                </div>
                <div class="helper__element__text">
                    Обратный звонок
                </div>
            </div>
        </div>
        <div class="helper__element red">
            <div class="helper__element__content">
                <div class="helper__element__icon">
                    <img src="../assets/telephone.svg" alt="telephone icon">
                </div>
                <div class="helper__element__text">
                    Обратный звонок
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "helper-menu"
    }
</script>

<style scoped lang="scss">
    @import "../scss/_colors.scss";

    .helper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        z-index: 996;
        &__element {
            height: 100px;
            width: 70px;
            position: relative;
            z-index: 4;
            margin: 20px 0;
            &:hover{
                height: auto;
                z-index: 5;
                cursor: pointer;
                .helper__element__text{
                    display: block;
                }
            }
            &__content {
                z-index: 5;
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }
            &:before, &:after {
                content: '';
                position: absolute;
                background: black;
                width: 100%;
                height: 64%;
                z-index: 4;
                box-shadow: -2px -2px 5px 1px rgba(0, 0, 0, 0.5);
            }
            &:before {
                top: -35px;
                transform: skewY(40deg);
                background: black;
                border-top-right-radius: 5px;
            }
            &:after {
                bottom: -35px;
                transform: skewY(-40deg);
                background: black;
                border-bottom-right-radius: 5px;
            }
            &__text {
                font-family: Helvetica;
                font-size: 32px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                overflow: hidden;
                white-space: nowrap;
                writing-mode: tb;
                color: $white;
                display: none;
            }
            &__icon {
                width: 46px;
                height: 46px;
                margin-bottom: 12px;
                z-index: 5;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            &.green {
                .helper__element__content {
                    background: $green;
                }
                &:before,
                &:after {
                    background: $green
                }
            }
            &.orange {
                .helper__element__content {
                    background: $orange;
                }
                &:before,
                &:after {
                    background: $orange
                }
            }
            &.blue {
                .helper__element__content {
                    background: $blue;
                }
                &:before,
                &:after {
                    background: $blue
                }
            }
            &.red {
                .helper__element__content {
                    background: $red;
                }
                &:before,
                &:after {
                    background: $red
                }
            }
        }

    }


</style>