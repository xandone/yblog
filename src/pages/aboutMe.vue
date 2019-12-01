<template>
    <div class="about">
        <div class="user-root">
            <img class="user-icon" src="../assets/head_icon.jpg" alt="">
            <span class="user-name">xandone</span>
            <div class="user-info">
                <a href="https://github.com/xandone" target="_blank">
                   <div class="github-span">
                      <img class="info-img" src="../assets/github.png" alt="">
                      <span>github</span>
                   </div>
                </a>
                <div class="mail-span">
                    <img class="info-img" src="../assets/mails.png" alt="">
                    <span >765478955@qq.com</span>
                </div>
                <div class="mail-span">
                    <img class="info-img" src="../assets/record.png" alt="">
                    <span >18篇</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import vueEvent from '@/bus/vueEvent.js'
export default {
    created() {
        vueEvent.$emit('index', '4');
    },
}
</script>
<style lang="scss">
@import "@/common/base";

user-span {
    font-size: 18px;
    color: #333;
}

.about {
    position: absolute;
    left: 20%;
    top: 20px;
}

.user-root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

    .user-icon {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .user-name {
        font-size: 40px;
        font-weight: bold;
    }

    .user-info {
        margin-top: 20px;
    }

    .info-img {
        width: 25px;
        height: 25px;
    }

    .github-span {
        display: flex;
        align-items: center;

        span {
            @extend user-span;
            margin-left: 10px;
            color: $text_blue;
        }
    }

    .mail-span {
        @extend user-span;
        display: flex;
        align-items: center;
        margin-top: 5px;

        span {
            margin-left: 10px;
        }
    }
}
</style>