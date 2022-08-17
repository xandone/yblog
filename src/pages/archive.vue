<!-- 归档 -->
<template>
    <div id="archive-root">
        <div class="item-type">
            <!--   <div class="item-type-title">
                <img src="../assets/line_ic.png" alt=""> <span>归档</span>
            </div> -->
            <item v-for="bean in artList" :bean="bean"></item>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-size="15" layout="total, prev, pager, next" :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import item from "@/components/archiveItem.vue"
    import {
        formatDate
    } from '@/utils/simpleUtils'

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
            }
        },
        mounted() {
            this.getArchiveList();
        },
        methods: {
            getArchiveList() {
                this.$axios.get(`/art/archivelist`, {
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
                            bean.artType = item.artType;
                            // bean.postTime = formatDate(item.postTime, "yyyy-MM-dd");
                            bean.postTime = item.postTime;
                            bean.urlParam = item.artType === 0 ? 'artDetails' : 'essayDetails';
                            bean.year = item.postTime.substring(0, 4)
                            this.artList.push(bean);
                        });
                        for (let i = 0; i < this.artList.length; i++) {
                            if (i > 0) {
                                this.artList[i].showYear = this.artList[i].year != this.artList[i - 1].year;
                                // console.log(this.artList[i].showYear);
                            } else {
                                this.artList[0].showYear = true;
                            }
                        }
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
                this.getArchiveList();
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
            width: 80%;
            padding: 10px;

            .item-type-title {
                text-align: left;
                font-size: 20px;
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


        .el-pagination.is-background .el-pager li:not(.disabled).active {
            background-color: $text_blue;
            color: white;
        }
    }
</style>