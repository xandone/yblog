<template>
    <div class="essay-root">
        <div class="banner">
            <el-carousel :interval="3000" height="400px">
                <el-carousel-item v-for="ban in bannerData">
                    <a :href="['/essayDetails/'+ban.articelId]" target="_blank">
                        <span class="banner-title">{{ban.title}}</span>
                        <el-image class="banner-ic" :src="ban.imgUrl" :fit="contain" ></el-image>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="essay-item">
            <essayItem v-for="item in tableData" :bean='item'></essayItem>
        </div>
        <div>
            <span v-if="isCanPre" @click="getArticleList(1)" class="turn-page previous-btn">←PREVIOUS</span>
            <span v-if="isCanNext" @click="getArticleList(2)" class="turn-page next-btn">NEXT→</span>
        </div>
    </div>
</template>
<script type="text/javascript">
import essayItem from "../components/essayItem.vue"
import vueEvent from '@/bus/vueEvent.js'
import { friendlyFormatTime } from '@/utils/simpleUtils'
export default {
    props: {
        ban: {
            type: Object
        }
    },
    created() {
        vueEvent.$emit('index', '3');
    },
    data() {
        return {
            bannerData: {},
            tableData: [],
            page: 1,
            row: 10,
            isCanPre: false,
            isCanNext: false
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
        //requstType,1:前一页，2：后一页
        getArticleList(requstType) {
            let that = this;
            if (requstType == 1) {
                this.page--;
            } else if (requstType == 2) {
                this.page++;
            }
            this.$axios.get(`/essay/essaylist`, {
                    params: {
                        page: this.page,
                        row: this.row,
                    }
                })
                .then((response) => {
                    const essaybean = response.data;
                    const data = essaybean.data;
                    this.tableData = [];
                    data.forEach(item => {
                        const tableData = {};
                        tableData.title = item.title;
                        tableData.essayCommentCount = item.essayCommentCount;
                        tableData.essayBrowseCount = item.essayBrowseCount;
                        tableData.content = item.content;
                        tableData.contentHtml = item.contentHtml;
                        tableData.coverImg = item.coverImg;
                        tableData.essayId = item.essayId;
                        tableData.essayUserId = item.essayUserId;
                        tableData.postTime = friendlyFormatTime(item.postTime);
                        this.tableData.push(tableData);

                        this.isCanNext = essaybean.total > this.row * this.page;
                        this.isCanPre = this.page > 1;
                    })
                })
                .catch((error) => {
                    console.log(error);
                    if (requstType = 1) {
                        this.page++;
                    } else if (requstType == 2) {
                        this.page--;
                    }
                });

        },
    }

}
</script>
<style lang="scss">
@import "@/common/base.scss";

.essay-root {
    width: $root_width_value;
    min-height: 100%;
    margin-top: $topbarHeight;
    position: relative;
    margin: 0 auto;
    background-color: white;
    padding-bottom: 50px;


    .turn-page {
        margin-top: 30px;
        padding: 10px;
        font-size: 26px;
        font-weight: bold;
        color: $text_blue;
        border: 1px solid $text_yellow;
        text-align: center;
    }

    .turn-page:hover {
        background-color: $text_yellow;
        cursor: pointer;
    }

    .previous-btn {
        float: left;
        margin-left: 20px;
    }

    .next-btn {
        float: right;
        margin-right: 20px;
    }
}

.banner {
    padding-left: 10px;
    padding-right: 10px;
    color: #475669;
    margin: 52px auto 0;

    .banner-ic {
        width: 100%;
        height: 400px;
    }

    .banner-title {
        position: absolute;
        width: 200px;
        bottom: 10px;
        right: 10px;
        color: #eee;
        font-size: 14px;
        z-index: 2;
        font-style: italic;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        text-align: right;
        padding-right: 10px;
    }
}

.essay-item {
    // height: 100%;
    padding: 10px;
}
</style>