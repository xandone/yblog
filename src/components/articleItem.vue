<template>
    <div id="item-root">
        <div>
            <img :src="bean.coverImg" v-if="bean.coverImg" class="place-img" alt="">
        </div>
            <div class="wrap-scan">
                <div class="title-root">
                    <a class="title-span" :href="['/artDetails/'+bean.artId]" target="_blank">
                           {{bean.title}}
                         </a>
                    <span class="art-type">{{bean.typeName}}</span>
                </div>
                <div>
                    <div class="content-root">
                        <span class="content-span">{{bean.content}}</span>
                    </div>
                    <div class="scan-root">
                        <!-- <span ><img src="../assets/scan.png" alt="">{{bean.artBrowseCount}}</span> -->
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
    color: #555;
}

#item-root {
    width: 100%;
    min-height: 140px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid $divide_line_color;
    overflow: hidden;

    .place-img {
        width: 200px;
        height: 140px;
        margin-right: 10px;
        border-radius: 6px;
        transition: all 0.5s;
    }

    .place-img:hover {
        transform: scale(1.05);
    }

    .wrap-scan {
        width: 100%;
        height: 140px;
        position: relative;
    }

    .title-root {
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;

        .title-span {
            font-weight: bold;
            font-size: 22px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: inline-block;
            text-align: left;
        }

        .art-type {
            font-size: 13px;
            margin-right: 10px;
            color: $text_yellow;
            display: inline-block;
        }
    }


    .content-root {
        text-align: left;
        width: 100%;
        height: 75px;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        span {
            font-size: 15px;
            margin-left: 5px;
            width: 100%;
            word-break: break-all;
        }
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
            width: 16px;
            height: 16px;
            margin-right: 2px;
        }
    }

    .date {
        @extend item-span;
        position: absolute;
        bottom: 0;
        right: 10px;
        color: #555;
        font-style: italic;
    }
}
</style>