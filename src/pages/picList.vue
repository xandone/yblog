<template>
    <div id="pic-root">
        <div v-for="(item ,index) in pics" v-if="index%3==0">
            <el-row>
                <el-col :span="8">
                    <div class="pic-cover">
                        <img :src="item.url" class="place-img" alt="">
                        <span class="pic-descrip">{{item.title}}</span>
                        <span class="pic-date">{{item.postTime}}</span>
                    </div>
                </el-col>
                <el-col :span="8" v-if="index+1<pics.length">
                    <div class="pic-cover">
                        <img :src="pics[index+1].url" class="place-img" alt="" >
                        <span class="pic-descrip">{{pics[index+1].title}}</span>
                        <span class="pic-date">{{pics[index+1].postTime}}</span>
                    </div>
                </el-col>
                <el-col :span="8" v-if="index+2<pics.length">
                    <div class="pic-cover">
                        <img :src="pics[index+2].url" class="place-img" alt="" >
                        <span class="pic-descrip">{{pics[index+2].title}}</span>
                        <span class="pic-date">{{pics[index+2].postTime}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="Pagination" style="text-align: left;margin-top: 30px;">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10" layout="total, prev, pager, next" :total="count">
            </el-pagination>
        </div>
        <ElImageViewer v-if="dialogImgVisible" :on-close="closeViewer" :url-list="[selectImgSrc]" />
    </div>
</template>
<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
    data() {
        return {
            albumId: this.$route.query.albumId,
            pics: [],
            page: 1,
            row: 10,
            count: 0,
            currentPage: 1,
            dialogImgVisible: false,
            selectImgSrc: [],
        }
    },

    components: { ElImageViewer },

    created() {
        this.getPhotos();
    },

    mounted() {},

    updated() {
        this.setImgOnClick();
    },

    methods: {
        getPhotos() {
            this.$axios.get(`/photo/photos`, {
                    params: {
                        page: this.page,
                        row: this.row,
                        albumId: this.albumId,
                    }
                })
                .then((response) => {
                    const art = response.data;
                    const data = art.data;
                    this.count = art.total;
                    this.pics = [];
                    data.forEach(item => {
                        const tableData = {};
                        tableData.title = item.title;
                        tableData.albumId = item.albumId;
                        tableData.id = item.id;
                        tableData.url = item.url;
                        tableData.count = item.count;
                        tableData.postTime = item.postTime;

                        this.pics.push(tableData);
                    })
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
        },
        setImgOnClick() {
            let root = document.getElementById('pic-root');
            if (root === null) {
                return;
            }

            let imgs = root.getElementsByTagName("img");
            let that = this;
            imgs.forEach(item => {
                item.addEventListener('click', function(e) {
                    that.dialogImgVisible = true;
                    that.selectImgSrc = item.src;
                });
            })
        },
        closeViewer() {
            this.dialogImgVisible = false;
        },
    }

}
</script>
<style lang="scss">
@import "@/common/base.scss";

#pic-root {
    width: $root_width_value;
    padding: 10px;
    text-align: left;

    .pic-cover {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;

        .place-img {
            width: 100%;
            height: 200px;
            margin-left: 10px;
            box-shadow: 2px 2px 5px #666;
            object-fit: contain;
            background: rgba(0, 0, 0, 0.8);
            cursor: pointer;

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