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
            <span class="date">2019-11-21</span>
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
    font-size: 15px;
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
    height: 75px;
    line-height: 25px;
    overflow: hidden;

    span {
        @extend item-span;
        float: right;
        margin-left: -5px;
        width: 100%;
        word-break: break-all;
    }
}

// 最后的三个省略号
.content-root::before {
    float: left;
    width: 5px;
    content: '';
    height: 40px;
}

.content-root::after {
    float: right;
    content: "...";
    height: 20px;
    line-height: 20px;
    /* 为三个省略号的宽度 */
    width: 3em;
    /* 使盒子不占位置 */
    margin-left: -3em;
    /* 移动省略号位置 */
    position: relative;
    left: 100%;
    top: -20px;
    padding-right: 5px;
}

.scan-root {
    width: 100%;
    margin-top: 15px;
    display: flex;
    position: relative;

    span {
        @extend item-span;
        display: flex;
        align-items: center;
    }

    span:nth-child(2) {
        margin-left: 12px;

        img {
            width: 16px;
            height: 16px;
        }
    }

    img {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }

    .date {
        position: absolute;
        right: 10px;
    }
}
</style>