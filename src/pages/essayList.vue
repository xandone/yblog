<!-- 杂文列表 -->
<template>
    <div id="essay-root">
        <!--   <div class="banner" v-if="isShowBanner">
            <el-carousel :interval="3000" height="400px">
                <el-carousel-item v-for="ban in bannerData">
                    <a :href="['/essayDetails/'+ban.articelId]" target="_blank">
                        <span class="banner-title">{{ban.title}}</span>
                        <el-image class="banner-ic" :src="ban.imgUrl"  fit="cover" ></el-image>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div> -->
        <div class="essay-content">
            <essayItem v-for="item in essatDatas " :bean='item' v-bind:key='item.index'></essayItem>
            <div>
                <span v-if="isCanPre" @click.stop="getArticleList(1)" class="turn-page previous-btn">←PREVIOUS</span>
                <span v-if="isCanNext" @click.stop="getArticleList(2)" class="turn-page next-btn">NEXT→</span>
            </div>
        </div>
        <!-- <nodata v-if="isNodata" /> -->
    </div>
</template>
<script type="text/javascript">
    import essayItem from "../components/essayItem.vue"
    import vueEvent from '@/bus/vueEvent.js'
    import {
        friendlyFormatTime
    } from '@/utils/simpleUtils'
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
                essatDatas: [],
                page: 1,
                row: 10,
                isCanPre: false,
                isCanNext: false,
                isShowBanner: false
            }
        },
        components: {
            essayItem,
        },
        mounted() {
            // this.getBanners();
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
                        this.isShowBanner = data.length === 0 ? false : true;
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
                        this.isShowBanner = false;
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
                        this.essatDatas = [];
                        data.forEach(item => {
                            let tableData = {};
                            tableData.title = item.title;
                            tableData.essayCommentCount = item.essayCommentCount;
                            tableData.essayBrowseCount = item.essayBrowseCount;
                            tableData.content = item.content;
                            tableData.contentHtml = item.contentHtml;
                            tableData.coverImg = item.coverImg;
                            tableData.essayId = item.essayId;
                            tableData.essayUserId = item.essayUserId;
                            tableData = this.checkShowImage(item);
                            tableData.postTime = friendlyFormatTime(item.postTime);
                            this.essatDatas.push(tableData);
                        });
                        this.isCanNext = essaybean.total > this.row * this.page;
                        this.isCanPre = this.page > 1;
                        window.scrollTo(0, 0);
                    })
                    .catch((error) => {
                        console.log(error);
                        if (requstType === 1) {
                            this.page++;
                        } else if (requstType === 2) {
                            this.page--;
                        }
                    });

            },
            checkShowImage(tableData) {
                let jsonImgArr = tableData.coverImg;
                let jsarr = JSON.parse(jsonImgArr);
                if (!jsarr || jsarr.length <= 0) {
                    tableData.isShowLeft = false;
                    tableData.isShowBottom = false;
                    tableData.imgArr = [];
                } else if (jsarr.length <= 2) {
                    tableData.isShowLeft = true;
                    tableData.isShowBottom = false;
                    tableData.imgArr = jsarr;
                } else {
                    tableData.isShowLeft = false;
                    tableData.isShowBottom = true;
                    tableData.imgArr = jsarr.slice(0, 3);
                }
                return tableData;
            },
        }

    }
</script>
<style lang="scss">
    @import "@/common/base.scss";

    #essay-root {
        width: $root_width_value;

        .banner {
            padding-left: 16px;
            padding-right: 16px;
            color: #475669;
            margin: 10px auto 0;

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
                font-size: 16px;
                // font-weight: bold;
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

        .essay-content {
            // height: 100%;
            padding-left: 16px;
            padding-right: 16px;
            background-color: white;

            .turn-page {
                margin-top: 30px;
                margin-bottom: 30px;
                padding: 10px;
                font-size: 26px;
                font-weight: bold;
                color: $text_blue;
                border: 1px solid $divide_line_color;
                text-align: center;
            }

            .turn-page:hover {
                background-color: $text_blue;
                cursor: pointer;
                color: white;
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
    }
</style>