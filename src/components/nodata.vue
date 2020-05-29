<template>
    <div class="nodata-root">
        <img src="../assets/no_data.png" alt="">
        <span>暂无数据</span>
    </div>
</template>
<script type="text/javascript">
</script>
<style lang="scss">
@import "@/common/base.scss";

.nodata-root {
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 150px;
    }

    span {
        font-size: 16px;
        color: #999;
        margin-top: 6px;
    }
}
</style>