<template>
    <div class="chat-btn-container">
        <div class="container">
            <div class="row justify-content-end">
                <div class="chat-btn">
                    <img :src="'icons/chat.svg'" alt="chat-btn">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chat-btn"
    }
</script>

<style lang="scss">
    .chat-btn-container{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 997;
        text-align: right;
        padding: 28px 0;
        .chat-btn{
            position: relative;
            border-radius: 50%;
            box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
            img{
                transform-origin: center;
                animation: chat-rotate infinite 5s 5s;
                z-index: 1;
                position: relative;
            }
            .ring{
                border: 1px solid #ff4242;
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                opacity: 0;
                animation: launcher-button-pulsate infinite 3s;
                &:nth-child(1){
                    animation-delay: .1s;
                }
                &:nth-child(2){
                    animation-delay: .25s;
                }
                &:nth-child(3){
                    animation-delay: .4s;
                }
            }

        }
    }

    @keyframes chat-rotate {
        0% {
           transform: rotate(0);
        }
        10% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes launcher-button-pulsate {
        60% {
            transform: scale(0.8);
            opacity: 0;
        }
        70% {
            transform: scale(0.8);
            opacity: 1;
        }
        100% {
            transform: scale(1.7);
            opacity: 0;
        }
    }
</style>