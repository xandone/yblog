<template>
    <div class="item-root">
        <div class="title-root">
            <a href="#">
            <span class="title-span">{{bean.title}}</span>
        </a>
        </div>
        <div class="content-root">
            <span class="content-span">{{bean.content}}</span>
        </div>
        <div class="scan-root">
            <span ><img src="../assets/scan.png" alt="">12</span>
            <span ><img src="../assets/awesome.png" alt="">30</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bean: {
            type: Object
        }
    },
}
</script>
<style lang="scss">
@import "@/common/base";

item-span {
    font-size: 14px;
    color: #999;
}

.item-root {
    border-bottom: 1px solid $divide_line_color;
    margin-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title-root {
    display: flex;

    .title-span {
        font-weight: bold;
        font-size: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        width: 500px;
        text-align: left;
    }
}

.content-root {
    text-align: left;

    span {
        overflow: hidden;
        line-height: 25px;
        @extend item-span;
    }
}

.scan-root {
    display: flex;

    span {
        @extend item-span;
        display: flex;
        align-items: center;

    }

    img {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }

    span:nth-child(2) {
        margin-left: 12px;
    }
}
</style>