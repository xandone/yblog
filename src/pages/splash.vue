<template>
    <div class="splash-root">
        <div class="img-bg">
            <el-image :fit='cover' src="http://www.xandone.pub/huoxing.jpg" style="width: 100%; height: 100%">
            </el-image>
        </div>
        <div class="content">
            <div>
                <span class="logo-span">xandone</span>
            </div>
            <div class="splash-tv-root">
                <span class="splash-tv blog" @click="go2github()">github</span>
                <span class="dividle">|</span>
                <span class="splash-tv blog" @click="go2Homepage()">博客</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        methods: {
            go2github() {
                window.open("https://github.com/xandone");
            },
            go2Homepage() {
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
        // background: url('http://www.xandone.pub/mainimage.jpg');
        background-color: black;

        .img-bg {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .content {
            position: absolute;
            top: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .logo-span {
            font-size: 100px;
            color: white;
            font-family: '宋体';
        }

        .splash-tv-root {
            display: flex;
            align-items: center;
            margin-top: 20px;
        }

        .splash-tv {
            position: relative;
            font-size: 32px;
            color: $text_yellow;
            // font-family: '仿宋'
        }

        .splash-tv::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -8px;
            height: 3px;
            transition: .3s;
            opacity: .6;
            background: $text_yellow;
            transform-origin: center;
            transform: scaleX(0);
        }

        .splash-tv:hover::after {
            transform: scaleX(1);
        }

        .dividle {
            margin: 0 30px;
            color: $text_yellow;
            font-size: 22px;
        }

        .blog {
            cursor: pointer;
        }

        a {
            position: relative;
            display: inline-block;
        }
    }
</style>