<template>
    <div class="article-root">
        <div class="art-tag">
            <artTag @clickTag="searchByTag"></artTag>
        </div>
        <div v-if="!isNodata" class="article-content">
            <articleItem v-for="item in tableData " :bean='item' v-bind:key='item.index'></articleItem>
            <div>
                <span v-if="isCanPre" @click="getArticleList(tagType,1)" class="turn-page previous-btn">←PREVIOUS</span>
                <span v-if="isCanNext" @click="getArticleList(tagType,2)" class="turn-page next-btn">NEXT→</span>
            </div>
        </div>
        <nodata v-if="isNodata" />
    </div>
</template>
<script>
import articleItem from '@/components/articleItem'
import artTag from '@/components/artTag'
import nodata from '@/components/nodata'
import vueEvent from '@/bus/vueEvent.js'
import { friendlyFormatTime } from '@/utils/simpleUtils'

export default {
    components: {
        articleItem,
        artTag,
        nodata
    },

    data() {
        return {
            tableData: [],
            tagList: [],
            page: 1,
            row: 10,
            tagType: -1,
            isNodata: false,
            isCanPre: false,
            isCanNext: false
        }
    },
    created() {
        vueEvent.$emit('index', '2');
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        //requstType,1:前一页，2：后一页
        getArticleList(type, requstType) {
            if (requstType == 1) {
                this.page--;
            } else if (requstType == 2) {
                this.page++;
            }
            this.$axios.get(`/art/artlist`, {
                    params: {
                        page: this.page,
                        row: this.row,
                        type: type,
                    }
                })
                .then((response) => {
                    const artBean = response.data;
                    const data = artBean.data;
                    this.tableData = [];
                    data.forEach(item => {
                        const bean = {};
                        bean.title = item.title;
                        bean.artCommentCount = item.artCommentCount;
                        bean.artBrowseCount = item.artBrowseCount;
                        bean.content = item.content;
                        bean.contentHtml = item.contentHtml;
                        bean.coverImg = item.coverImg;
                        bean.artId = item.artId;
                        bean.typeName = item.typeName;
                        bean.artUserId = item.artUserId;
                        bean.postTime = friendlyFormatTime(item.postTime);
                        this.tableData.push(bean);
                    })
                    this.isNodata = this.tableData.length == 0;
                    this.isCanNext = artBean.total > this.row * this.page;
                    this.isCanPre = this.page > 1;
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

        searchByTag(type) {
            this.page = 1;
            this.tagType = type;
            this.getArticleList(type);
        }
    }

}
</script>
<style lang='scss'>
@import "@/common/base.scss";

.article-root {
    width: $root_width_value;
    min-height: 100%;
    margin: 0 auto;
}

.article-content {
    height: 100%;
    margin-top: $topbarHeight;
    padding: 10px;
    background-color: white;

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

.art-tag {
    width: 12%;
    margin-top: $topbarHeight;
    position: fixed;
    z-index: 10;
    right: 2%;
}
</style>