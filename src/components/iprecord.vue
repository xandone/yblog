<!-- ip备案 -->
<template>
    <div id="record">
        <div class="blog-name">
            <a class="blog-ic" href="https://github.com/xandone" target="_blank">
                <img class="info-img" src="../assets/github.png" alt="">
            </a>
            <span>xandone' blog</span>
        </div>
        <span>鄂ICP备 19030263号</span>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    #record {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .blog-name {
            display: flex;
            align-items: center;

            .blog-ic {
                display: flex;
                align-items: center;
            }

            img {
                width: 22px;
                height: 22px;
            }
        }
    }
</style>