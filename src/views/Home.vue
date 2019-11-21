<template>
    <div class="home-root">
        <userView></userView>
        <articleList></articleList>
    </div>
</template>
<script>
import articleList from '@/pages/articleList'
import userView from '@/pages/userView'
export default {
    name: 'home',
    components: {
        articleList,
        userView
    }
}
</script>
<style lang="scss">
@import "@/common/base";

.home-root {
    background-color: #234;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding-top: $topbarHeight;
}
</style>