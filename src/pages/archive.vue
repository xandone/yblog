<template>
    <div id="archive-root">
        <div class="item-type dividle-item">
            <div class="item-type-title">
                <img src="../assets/line_ic.png" alt=""> <span>编程</span>
            </div>
            <item v-for="bean in artList" :bean="bean"></item>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
                </el-pagination>
            </div>
        </div>
        <div class="item-type">
            <div class="item-type-title">
                <img src="../assets/line_ic.png" alt=""> <span>杂文</span>
            </div>
            <item v-for="bean in essayList" :bean="bean"></item>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination background @size-change="handleSizeChange2" @current-change="handleCurrentChange2" :current-page="currentPageEssay" :page-size="15" layout="total, prev, pager, next" :total="countEssay">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import item from "@/components/archiveItem.vue"

export default {
    components: {
        item
    },
    data() {
        return {
            artList: [],
            page: 1,
            row: 15,
            count: 0,
            currentPage: 1,

            essayList: [],
            pageEssay: 1,
            rowEssay: 15,
            countEssay: 0,
            currentPageEssay: 1,
        }
    },
    mounted() {
        this.getArtList();
        this.getEssayList();
    },
    methods: {
        getArtList() {
            this.$axios.get(`/art/artlist`, {
                    params: {
                        page: this.page,
                        row: this.row,
                    }
                })
                .then((response) => {
                    const artBean = response.data;
                    const data = artBean.data;
                    this.count = artBean.total;
                    this.artList = [];
                    data.forEach(item => {
                        const bean = {};
                        bean.title = item.title;
                        bean.artId = item.artId;
                        bean.typeName = item.typeName;
                        bean.postTime = item.postTime;
                        bean.urlParam = 'artDetails';
                        this.artList.push(bean);
                    });
                    window.scrollTo(0, 0);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.page = val;
            this.getArtList();
        },

        getEssayList() {
            let that = this;
            this.$axios.get(`/essay/essaylist`, {
                    params: {
                        page: this.pageEssay,
                        row: this.rowEssay,
                    }
                })
                .then((response) => {
                    const essaybean = response.data;
                    const data = essaybean.data;
                    this.countEssay = essaybean.total;
                    this.essayList = [];
                    data.forEach(item => {
                        let tableData = {};
                        tableData.title = item.title;
                        tableData.essayCommentCount = item.essayCommentCount;
                        tableData.artId = item.essayId;
                        tableData.postTime = item.postTime;
                        tableData.urlParam = 'essayDetails';

                        this.essayList.push(tableData);
                    });
                    window.scrollTo(0, 0);
                })
                .catch((error) => {
                    console.log(error);
                });

        },

        handleSizeChange2(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange2(val) {
            this.currentPageEssay = val;
            this.pageEssay = val;
            this.getEssayList();
        },
    }
}
</script>
<style lang="scss">
@import "@/common/base.scss";

#archive-root {
    width: $root_width_value;
    padding: 10px;
    display: flex;

    .item-type {
        width: 50%;
        padding: 10px;

        .item-type-title {
            text-align: left;
            font-size: 18px;
            font-weight: bold;
            display: flex;
            align-items: center;

            img {
                width: 25px;
            }
        }
    }

    .dividle-item {
        border-right: 1px solid #e2e8f0;
    }
}
</style>