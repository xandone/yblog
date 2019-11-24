<template>
    <div id="app" class="fill">
        <router-view />
    </div>
</template>
<script>
import topBar from '@/components/topBar'
export default {
    components: {
        topBar,
    }
}
</script>
<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.fill {
    width: 100%;
    height: 100%;
}
</style>