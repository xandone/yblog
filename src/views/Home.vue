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
.home-root {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
}
</style>