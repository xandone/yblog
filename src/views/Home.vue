<template>
    <div class="home-root">
        <mainVue></mainVue>
    </div>
</template>
<script>
import mainVue from '@/pages/main'
export default {
    name: 'home',
    components: {
        mainVue,
    }
}
</script>
<style lang="scss">
@import "@/common/base";

.home-root {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
</style>