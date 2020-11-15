<template>
    <div id="home-root1">
        <div class="blog-info">
            <blogInfo></blogInfo>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import blogInfo from "@/components/blogInfo"
export default {
    name: 'home',
    components: { blogInfo },
    mounted() {},

    methods: {}
}
</script>
<style lang="scss">
@import "@/common/base";

#home-root1 {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: white;

    .blog-info {
        width: 20%;
        min-height: 100%;
        position: relative;
        background-color: white;
    }
}
</style>