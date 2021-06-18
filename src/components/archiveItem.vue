<template>
    <div id="archive-item-root">
        <div class="achive-d-year" v-if="bean.showYear">
            <img src="../assets/line_ic.png" alt="">
            <span>{{bean.year}}</span>
        </div>
        <div class="archive-item ech-r">
            <a :href="['/'+bean.urlParam+'/'+bean.artId]" target="_blank" > <span class="title">{{bean.title}}</span></a>
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
        color: #333;
        display: flex;
        align-items: center;
    }

    .archive-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 40px;

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