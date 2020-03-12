<template>
    <div class="home-root1">
        <topBar></topBar>
        <router-view></router-view>
    </div>
</template>
<script>
import topBar from "@/components/topBar"
export default {
    name: 'home',
    components: { topBar },
}
</script>
<style lang="scss">
@import "@/common/base";

.home-root1 {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: flex-start;
}
</style>