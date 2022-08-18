<!-- 加载页 -->
<template>

    <div class="loading">
        <!-- 复制到下一行快捷键 Art+Shitf+↓ -->
        <div class="space"></div>
        <div class="space"></div>
        <div class="space"></div>
        <div class="space"></div>
        <div class="space"></div>

        <div class="space"></div>
    </div>
</template>
<style lang="scss" scoped>
    .loading .space {
        height: 18px;
        margin-bottom: 12px;
        background: linear-gradient(90deg, #ddd, #edeff1, #ddd);
        background-size: 500px 50px;
        animation: skeleton-stripes .6s linear infinite
    }

    .loading .space:nth-of-type(1) {
        width: 60%;
    }

    .loading .space:nth-of-type(2) {
        width: 95%;
    }

    .loading .space:nth-of-type(3) {
        width: 70%;
    }

    .loading .space:nth-of-type(4) {
        width: 80%;
    }

    .loading .space:nth-of-type(5) {
        width: 50%;
    }

    .loading .space:nth-of-type(6) {
        width: 40%;
    }

    @keyframes skeleton-stripes {
        0% {
            background-position: 0 0
        }

        to {
            background-position: 500px 0
        }
    }
</style>