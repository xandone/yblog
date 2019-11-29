<template>
    <div class="essay-root">
        <div class="banner">
            <el-carousel :interval="3000" height="400px">
                <el-carousel-item v-for="ban in bannerData">
                    <a :href="ban.articleUrl" target="_blank">
                        <span class="banner-title">{{ban.title}}</span>
                        <el-image class="banner-ic" :src="ban.imgUrl" ></el-image>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="essay-item">
            <essayItem v-for="item in tableData" :bean='item'></essayItem>
        </div>
    </div>
</template>
<script type="text/javascript">
import essayItem from "../components/essayItem.vue"
export default {
    props: {
        ban: {
            type: Object
        }
    },
    data() {
        return {
            bannerData: {},
            tableData: [],
            page: 1,
            row: 10,
        }
    },
    components: {
        essayItem,
    },
    mounted() {
        this.getBanners();
        this.getArticleList();
    },
    methods: {
        getBanners() {
            this.$axios.get(`/banner/list`)
                .then((response) => {
                    const result = response.data;
                    const data = result.data;
                    this.count = result.total;
                    this.bannerData = [];
                    data.forEach(item => {
                        const bannerData = {};
                        bannerData.imgUrl = item.imgUrl;
                        bannerData.upTime = item.upTime;
                        bannerData.title = item.title;
                        bannerData.articleUrl = item.articleUrl;
                        bannerData.articelId = item.articelId;
                        this.bannerData.push(bannerData);
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        getArticleList(tag) {
            let that = this;
            this.$axios.get(`/essay/essaylist`, {
                    params: {
                        page: this.page,
                        row: this.row,
                        tag: tag,
                    }
                })
                .then((response) => {
                    const joker = response.data;
                    const data = joker.data;
                    // this.tableData = [];
                    data.forEach(item => {
                        const tableData = {};
                        tableData.title = item.title;
                        tableData.essayCommentCount = item.essayCommentCount;
                        tableData.content = item.content;
                        tableData.contentHtml = item.contentHtml;
                        tableData.coverImg = item.coverImg;
                        tableData.essayId = item.essayId;
                        // tableData.jokeUserIcon = item.jokeUserIcon;
                        tableData.essayUserId = item.essayUserId;
                        // tableData.jokeUserNick = item.jokeUserNick;
                        tableData.postTime = item.postTime;
                        this.tableData.push(tableData);
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

        },
    }

}
</script>
<style lang="scss">
@import "@/common/base.scss";

.essay-root {
    width: $root_width_value;
    height: 100%;
    margin-top: $topbarHeight;
    position: relative;
    margin: 0 auto;
    background-color: white;
}

.banner {
    width: 100%;
    color: #475669;
    margin: 0 auto;

    .banner-ic {
        width: 100%;
        height: 400px;
    }

    .banner-title {
        position: absolute;
        width: 160px;
        bottom: 10px;
        right: 10px;
        color: #eee;
        font-size: 14px;
        z-index: 2;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: right;
    }
}

.essay-item {
    width: 100%;
    background-color: white;
}
</style>