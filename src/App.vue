<template>
    <div id="app" v-on:click="createLoves($event)">
        <background ref="background"></background>
        <router-view />
    </div>
</template>
<script>
import background from "@/components/background.vue"
export default {
    components: { background },
    methods: {
        createLoves(event) {
            this.$refs.background.createLoves(event)
        },
        removeSmallHert() {
            this.$refs.background.removeSmallHert()
        }
    }
}
</script>
<style lang="scss">
html,
body,
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
}
</style>