<template>
    <div class="article-root">
        <div class="art-tag">
            <artTag @clickTag="searchByTag"></artTag>
        </div>
        <div v-if="!isNodata" class="article-content">
            <articleItem v-for="item in tableData " :bean='item' v-bind:key='item.index'></articleItem>
        </div>
        <nodata v-if="isNodata" />
    </div>
</template>
<script>
import articleItem from '@/components/articleItem'
import artTag from '@/components/artTag'
import nodata from '@/components/nodata'
import vueEvent from '@/bus/vueEvent.js'

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
            isNodata: false
        }
    },
    created() {
        vueEvent.$emit('index', '2');
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        getArticleList(type) {
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
                        bean.postTime = item.postTime;
                        this.tableData.push(bean);
                    })
                    this.isNodata = this.tableData.length == 0;
                    console.log(this.isNodata);
                })
                .catch((error) => {
                    console.log(error);
                });

        },

        searchByTag(type) {
            this.page = 1;
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

}

.art-tag {
    width: 12%;
    margin-top: $topbarHeight;
    position: fixed;
    z-index: 10;
    right: 2%;
}
</style>