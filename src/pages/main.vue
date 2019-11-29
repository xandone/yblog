<template>
    <div class="main-root">
        <img src="../assets/bg.jpg" alt="">
    </div>
</template>
<script type="text/javascript">
import vueEvent from '@/bus/vueEvent.js'
export default {
    props: {},
    data() {
        return {}
    },
    created() {
        vueEvent.$emit('index', '1');
    },
    mounted() {},
    methods: {

    }

}
</script>
<style lang="scss">
@import "@/common/base.scss";

.main-root {
    width: 100%;
    height: 100%;
    margin-top: $topbarHeight;
    position: absolute;

    img {
        width: 100%;
        height: 100%
    }
}
</style>