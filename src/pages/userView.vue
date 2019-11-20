<template>
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
        </div>
    </div>
</template>
<script></script>
<style lang="scss">
@import "@/common/base";

.user-root {
    width: 22%;
    height: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    .user-icon {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .user-name {
        font-size: 30px;
        font-weight: bold;
    }

    .user-info {
        margin-top: 10px;
    }

    .info-img {
        width: 22px;
        height: 22px;
    }

    .github-span {
        display: flex;

        span {
            font-size: 16px;
            margin-left: 6px;
            color: $text_blue;
        }
    }

    .mail-span {
        display: flex;
        margin-top: 5px;
    }
}
</style>