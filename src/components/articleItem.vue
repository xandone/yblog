<template>
    <div class="item-root">
        <div>
            <img :src="bean.coverImg" v-if="bean.coverImg" class="place-img" alt="">
        </div>
            <div class="wrap-scan">
                <div class="title-root">
                    <a :href="['/artDetails/'+bean.artId]" target="_blank">
                    <span class="title-span">{{bean.title}}</span>
                </a>
                </div>
                <div>
                    <div class="content-root">
                        <span class="content-span">{{bean.content}}</span>
                    </div>
                    <div class="scan-root">
                        <span ><img src="../assets/scan.png" alt="">{{bean.artBrowseCount}}</span>
                        <span ><img src="../assets/awesome.png" alt="">{{bean.artCommentCount}}</span>
                    </div>
                    <span class="date">{{bean.postTime}}</span>
                </div>
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
    width: 100%;
    height: 140px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid $divide_line_color;
}

.place-img {
    width: 200px;
    height: 140px;
    margin-right: 10px;
    border-radius: 6px;
}

.wrap-scan {
    height: 140px;
    position: relative;
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
    top: 15px;
    padding-right: 5px;
    color: #999;
}

.scan-root {
    display: flex;
    position: absolute;
    bottom: 0;

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
        margin-right: 2px;
    }
}

.date {
    @extend item-span;
    position: absolute;
    bottom: 0;
    right: 10px;
}
</style>