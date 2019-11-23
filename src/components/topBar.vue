<template>
    <div id="topBar">
        <a href="/" class="blog-name"> <span >xandone</span></a>
        <div class="tab">
            <el-menu :default-active="topbarIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">编程</el-menu-item>
                <el-menu-item index="3">杂文</el-menu-item>
                <el-menu-item index="4">图片</el-menu-item>
                <el-menu-item index="5">关于</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
// import setStore from "@/utils/utils"
// import TOP_BAR_INDEX_KEY from "@/config/evn"
export default {
    data() {
        return {
            topbarIndex: '1',
        };
    },
    created() {

    },
    methods: {
        handleSelect(key) {
            console.log(key);
            switch (key) {
                case '1':
                    this.$router.push('/');
                    break;
                case '2':
                    this.$router.push('/articleList');
                    break;
                case '3':
                    this.$router.push('/essayList');
                    break;
                case '4':
                    this.$router.push('/picList');
                    break;
                case '5':
                    this.$router.push('/aboutMe');
                    break;
            }
        }
    }
}
</script>
<style lang="scss">
@import "@/common/base";

#topBar {
    width: 100%;
    height: $topbarHeight;
    position: fixed;
    z-index: 10;
    background-color: #545c64;
}

.tab {
    background-color: red;
    display: inline-block;
    height: $topbarHeight;
    position: absolute;
    right: 15%;
    bottom: 0;
}

.blog-name {
    font-size: 30px;
    font-weight: bold;
    color: #ffd04b;
    float: left;
    line-height: $topbarHeight;
    margin-left: 10%;
}
</style>