<template>
    <div id="archive-item-root">
        <div class="achive-d-year">
            <span v-if="bean.showYear">--{{bean.year}}--</span>
        </div>
        <div class="archive-item">
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
        font-size: 16px;
        text-align: left;
        line-height: 50px;
        color: #555;
    }

    .archive-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 40px;

        .title {
            color: #333;
            font-size: 18px;
            font-weight: bold;
        }

        .date {
            color: #888;
            font-size: 15px;
        }

        a span:focus,
        a span:hover {

            color: $text_blue !important;
        }
    }
}
</style>