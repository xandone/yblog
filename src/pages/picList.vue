<template>
    <div id="pic-root">
        <div v-for="(item ,index) in pics" v-if="index%3==0">
            <el-row>
                <el-col :span="8">
                    <div class="pic-cover">
                        <img :src="item.coverImg" class="place-img" alt="">
                        <span class="pic-descrip">{{item.name}}({{item.count||0}})</span>
                    </div>
                </el-col>
                <el-col :span="8" v-if="index+1<pics.length">
                    <div class="pic-cover">
                        <img :src="pics[index+1].coverImg" class="place-img" alt="" >
                        <span class="pic-descrip">{{pics[index+1].name}}({{pics[index+1].count||0}})</span>
                    </div>
                </el-col>
                <el-col :span="8" v-if="index+2<pics.length">
                    <div class="pic-cover">
                        <img :src="pics[index+2].coverImg" class="place-img" alt="" >
                        <span class="pic-descrip">{{pics[index+2].name}}({{pics[index+2].count||0}})</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <ElImageViewer v-if="dialogImgVisible" :on-close="closeViewer" :url-list="[selectImgSrc]" />
    </div>
</template>
<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
    data() {
        return {
            pics: [{
                    coverImg: "http://www.xandone.pub/FuGbIQJe3r-yAO0EjDBfA047NghH",
                    name: "电影海报1",
                    count: 10,
                },
                {
                    coverImg: "http://www.xandone.pub/FiF_SMCgQk8QoMJBcAQADFA7oHS3",
                    name: "电影海报2",
                    count: 20,
                },
                {
                    coverImg: "http://www.xandone.pub/Fl0QpQce-_LVjnm6LSt_XgYvTFES",
                    name: "电影海报3",
                    count: 20,
                }, {
                    coverImg: "http://www.xandone.pub/FiF_SMCgQk8QoMJBcAQADFA7oHS3",
                    name: "电影海报4",
                    count: 20,
                }
            ],
            dialogImgVisible: false,
            selectImgSrc: []
        }
    },

    components: { ElImageViewer },

    created() {

    },

    updated() {},

    mounted() {
        this.setImgOnClick();
    },

    methods: {
        setImgOnClick() {
            let root = document.getElementById('pic-root');
            if (root === null) {
                return;
            }

            let imgs = root.getElementsByTagName("img");
            let that = this;
            console.log(imgs.length);
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
    }

}
</style>