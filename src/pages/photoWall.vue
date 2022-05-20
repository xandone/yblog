<template>
    <div id="photo-root">
        <div v-for="(item ,index) in pics" v-if="index%2==0">
            <el-row>
                <el-col :span="12">
                    <div class="pic-cover">
                        <img :src="item.url" class="place-img" alt="" fit="cover" @click="go2List(index)">
                        <span class="pic-descrip">{{item.title}}({{item.count||0}})</span>
                        <span class="pic-date">{{item.postTime}}</span>
                    </div>
                </el-col>
                <el-col :span="12" v-if="index+1<pics.length">
                    <div class="pic-cover">
                        <img :src="pics[index+1].url" class="place-img" alt="" fit="cover" @click="go2List(index+1)">
                        <span class="pic-descrip">{{pics[index+1].title}}({{pics[index+1].count||0}})</span>
                        <span class="pic-date">{{pics[index+1].postTime}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div>
            <span v-if="isCanPre" @click.stop="getList(1)" class="turn-page previous-btn">←PREVIOUS</span>
            <span v-if="isCanNext" @click.stop="getList(2)" class="turn-page next-btn">NEXT→</span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pics: [],
                page: 1,
                row: 10,
                isCanPre: false,
                isCanNext: false,
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList(requstType) {
                this.$axios.get(`/photo/photoCovers`, {
                        params: {
                            page: this.page,
                            row: this.row,
                        }
                    })
                    .then((response) => {
                        const tempbean = response.data;
                        const data = tempbean.data;
                        this.pics = [];
                        data.forEach(item => {
                            let tableData = {};
                            tableData.title = item.title;
                            tableData.id = item.id;
                            tableData.url = item.url;
                            tableData.count = item.count;
                            tableData.postTime = item.postTime;
                            this.pics.push(tableData);
                        });
                        this.isCanNext = tempbean.total > this.row * this.page;
                        this.isCanPre = this.page > 1;
                        window.scrollTo(0, 0);
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
            go2List(index) {
                this.$router.push({
                    path: '/picList',
                    //相当于get，这里使用"path"路由，如果使用params（相当于post），需用"name"进行路由
                    query: {
                        albumId: this.pics[index].id,
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
    @import "@/common/base.scss";

    #photo-root {
        width: $root_width_value;
        padding: 10px;
        text-align: left;

        .pic-cover {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
            padding: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

            .place-img {
                width: 100%;
                height: 220px;

                // box-shadow: 2px 2px 5px #666;
            }

            .pic-descrip {
                font-size: 15px;
                color: #333;
                margin-top: 6px;
            }

            .pic-date {
                font-size: 14px;
                color: #333;
                margin-top: 6px;
            }
        }

    }
</style>