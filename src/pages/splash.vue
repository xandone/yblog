<template>
    <div class="splash-root">
        <div class="content">
            <div>
                <span class="logo-span">xandone</span>
            </div>
            <div class="splash-tv-root">
                <a href="https://github.com/xandone" target="_blank">
                <span class="splash-tv">github</span>
            </a>
                <span class="splash-tv dividle">|</span>
                <span class="splash-tv blog" @click="gotoHomepage()">博客</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    methods: {
        gotoHomepage() {
            this.$router.push('/articleList');
        }
    }

}
</script>
<style type="text/css" lang='scss'>
@import '@/common/base';

.splash-root {
    display: flex;
    position: relative;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: url('http://www.xandone.pub/mainimage.jpg');
    background-color: black;

    .content {
        position: absolute;
        top: 50%;
        display: flex;
        flex-direction:column;
        align-items:center;
    }

    .logo-span {
        font-size: 80px;
        color: white;
        font-family: '宋体'
    }

    .splash-tv-root {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }

    .splash-tv {
        font-size: 28px;
        color: $text_yellow;
        // font-family: '仿宋'
    }

    .dividle {
        margin: 0 30px;
    }

    .blog {
        cursor: pointer;
    }

    a {
        display: inline-block;
    }
}
</style>