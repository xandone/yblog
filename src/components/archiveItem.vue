<!-- 归档item -->
<template>
    <div id="archive-item-root">
        <div class="achive-d-year" v-if="bean.showYear">
            <span class="project-info-titlebar">{{bean.year}}</span>
        </div>
        <div class="archive-item ech-r">
            <a :href="['/'+bean.urlParam+'/'+bean.artId]" target="_blank"> <span class="title">{{bean.title}}</span></a>
            <span class="date">{{bean.postTime}}</span>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {

        props: {
            bean: {
                type: Object,
            },
        },
        data() {
            return {}
        }
    }
</script>
<style lang="scss">
    @import "@/common/base.scss";


    #archive-item-root {
        .achive-d-year {
            font-size: 28px;
            font-weight: 400;
            line-height: 50px;
            height: 50px;
            color: #333;
            display: flex;
            align-items: center;

            .project-info-titlebar {
                border-left: 3px $text_yellow solid;
                line-height: 26px;
                padding-left: 10px;
            }
        }

        .archive-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 35px;

            .title {
                color: #333;
                font-size: 16px;
            }

            .date {
                color: #555;
                font-size: 14px;
            }

            a span:focus,
            a span:hover {}
        }

        .ech-r:hover {
            transform: translate3d(10px, 0, 0);

            color: #333 !important;
            font-weight: bold;
        }
    }
</style>