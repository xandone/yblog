<template>
    <div class="main-root">
        <img src="../assets/bg.jpg" alt="">
    </div>
</template>
<script type="text/javascript">
export default {
    props: {},
    data() {
        return {}
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