<template>
    <div class="essay-item-root">
        <div>
            <img :src="imgArr[0]" v-if="isShowLeft" class="essay-place-img" alt="">
        </div>
            <div class="essay-wrap-scan">
                <div class="essay-title-root">
                    <a :href="['/essayDetails/'+bean.essayId]" target="_blank">
                <span class="essay-title-span">{{bean.title}}</span>
                </a>
                </div>
                <div>
                    <div class="essay-content-root">
                        <span class="essay-content-span">{{bean.content}}</span>
                    </div>
                    <div class="essay-img" v-if="isShowBottom">
                        <img  v-for="item in imgArr" alt="" :src="item" v-if="isShowBottom">
                    </div>
                        <div class="essay-scan-root">
                            <span ><img src="../assets/scan.png" alt="">{{bean.essayBrowseCount}}</span>
                            <span ><img src="../assets/awesome.png" alt="">{{bean.essayCommentCount}}</span>
                        </div>
                        <span class="essay-date">{{bean.postTime}}</span>
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

    data() {
        return {
            isShowLeft: false,
            isShowBottom: false,
            imgArr: [],
        }
    },

    created() {
        this.checkShowLeft(this.bean.coverImg);
        this.checkShowBottom(this.bean.coverImg);
    },
    methods: {
        checkShowBottom(jsonImgArr) {
            let jsarr = JSON.parse(jsonImgArr);
            this.isShowBottom = jsarr.length >= 3;
            this.imgArr = jsarr;
        },

        checkShowLeft(jsonImgArr) {
            let jsarr = JSON.parse(jsonImgArr);
            this.isShowLeft = jsarr.length == 1 || jsarr.length == 2;
            this.imgArr = jsarr;
        }
    }
}
</script>
<style lang="scss">
@import "@/common/base";

item-span {
    font-size: 14px;
    color: #999;
}

.essay-item-root {
    width: 100%;
    min-height: 140px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid $divide_line_color;
}

.essay-place-img {
    width: 200px;
    height: 140px;
    margin-right: 10px;
    border-radius: 6px;
}

.essay-wrap-scan {
    // min-height: 140px;
    position: relative;
    padding-bottom: 30px;
    width: 100%;
}

.essay-title-root {
    display: flex;

    .essay-title-span {
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

.essay-content-root {
    width: 100%;
    height: 75px;
    line-height: 25px;
    text-align: left;
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
.essay-content-root::before {
    float: left;
    width: 5px;
    content: '';
    height: 40px;
}

.essay-content-root::after {
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

.essay-scan-root {
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

.essay-date {
    @extend item-span;
    position: absolute;
    bottom: 0;
    right: 10px;
}

.essay-img {
    display: flex;
    margin-top: 4px;

    img {
        width: 180px;
        height: 120px;
        border-radius: 4px;
        margin-right: 10px;
    }
}
</style>