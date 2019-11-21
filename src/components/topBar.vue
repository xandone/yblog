<template>
    <div id="topBar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="首页" name="first"></el-tab-pane>
            <el-tab-pane label="编程" name="second"></el-tab-pane>
            <el-tab-pane label="杂文" name="third"></el-tab-pane>
            <el-tab-pane label="相册" name="fourth"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 'first',
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
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
    background-color: white;
}
</style>