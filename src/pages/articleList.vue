<template>
    <div class="article-root">
        <div class="art-tag">
            <artTag @clickTag="searchByTag"></artTag>
        </div>
        <div class="article-content">
            <articleItem v-for="item in tableData " :bean='item' v-bind:key='item.index'></articleItem>
        </div>
    </div>
</template>
<script>
import articleItem from '@/components/articleItem'
import artTag from '@/components/artTag'
import vueEvent from '@/bus/vueEvent.js'

export default {
    components: {
        articleItem,
        artTag
    },

    data() {
        return {
            tableData: [],
            tagList: [],
            page: 1,
            row: 10,
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
                        const tableData = {};
                        tableData.title = item.title;
                        tableData.artCommentCount = item.artCommentCount;
                        tableData.artBrowseCount = item.artBrowseCount;
                        tableData.content = item.content;
                        tableData.contentHtml = item.contentHtml;
                        tableData.coverImg = item.coverImg;
                        tableData.artId = item.artId;
                        tableData.typeName = item.typeName;
                        tableData.artUserId = item.artUserId;
                        tableData.postTime = item.postTime;
                        this.tableData.push(tableData);
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

        },

        searchByTag(type) {
            console.log(type);
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
    height: 100%;
    margin: 0 auto;
}

.article-content {
    height: 100%;
    margin-top: $topbarHeight;
    background-color: white;
    padding: 10px;
}

.art-tag {
    width: 15%;
    margin-top: 15%;
    position: fixed;
    z-index: 10;
    right: 2%;
}
</style>