<template>
    <div class="home-root">
        <topBar></topBar>
        <router-view></router-view>
    </div>
</template>
<script>
import topBar from "@/components/topBar"
export default {
    name: 'home',
    components: { topBar }
}
</script>
<style lang="scss">
@import "@/common/base";

.home-root {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
}
</style>