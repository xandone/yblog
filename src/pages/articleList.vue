<template>
    <div class="article-root">
        <div class="content">
            <articleItem v-for="item in tableData " :bean='item' v-bind:key='item.index'></articleItem>
        </div>
    </div>
</template>
<script>
import articleItem from '@/components/articleItem'
import vueEvent from '@/bus/vueEvent.js'

export default {
    components: {
        articleItem
    },

    data() {
        return {
            tableData: [],
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
        getArticleList(tag) {
            this.$axios.get(`/art/artlist`, {
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
                        tableData.artCommentCount = item.artCommentCount;
                        tableData.artBrowseCount = item.artBrowseCount;
                        tableData.content = item.content;
                        tableData.contentHtml = item.contentHtml;
                        tableData.coverImg = item.coverImg;
                        tableData.artId = item.artId;
                        tableData.typeName = item.typeName;
                        tableData.artUserId = item.artUserId;
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
<style lang='scss'>
@import "@/common/base.scss";

.article-root {
    width: $root_width_value;
    height: 100%;
    margin: 0 auto;
    margin-top: $topbarHeight;
    background-color: white;
}

.content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    background-color: white;

}
</style>