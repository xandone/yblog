<template>
    <div class="essay-item-root">
        <div>
            <img :src="bean.imgArr[0]" v-if="bean.isShowLeft" class="essay-place-img" alt="">
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
                    <div class="essay-img" v-if="bean.isShowBottom">
                        <img  v-for="item in bean.imgArr" alt="" :src="item" v-if="bean.isShowBottom">
                    </div>
                        <div class="essay-scan-root">
                            <!--  <span ><img src="../assets/scan.png" alt="">{{bean.essayBrowseCount}}</span> -->
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

    },
    methods: {

    }
}
</script>
<style lang="scss">
@import "@/common/base";

item-span {
    font-size: 14px;
    color: #555;
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
    transition: all 0.5s;
}

.essay-place-img:hover {
    transform: scale(1.05);
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
    line-height: 25px;
    height: 75px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    span {
        @extend item-span;
        margin-left: 5px;
        width: 100%;
        word-break: break-all;
    }
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
        width: 16px;
        height: 16px;
        margin-right: 2px;
    }
}

.essay-date {
    @extend item-span;
    position: absolute;
    bottom: 0;
    right: 10px;
    color: #999;
    font-style: italic;
}

.essay-img {
    display: flex;
    margin-top: 4px;

    img {
        width: 180px;
        height: 120px;
        border-radius: 4px;
        margin-right: 10px;
        transition: all 0.5s;
    }

    img:hover {
        transform: scale(1.05);
    }
}
</style>