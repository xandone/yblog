<template>
    <div class="root">
        <div class="banner">
            <el-carousel :interval="3000" height="520px">
                <el-carousel-item v-for="ban in bannerData">
                    <a :href="ban.articleUrl" target="_blank">
                        <span class="banner-title">{{ban.title}}</span>
                        <el-image class="banner-ic" :src="ban.imgUrl" ></el-image>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="art-card">
            <img src="../assets/head_icon.jpg" alt="">
            <div class="main-art">
                <div class="art-details">
                    <span>详情</span>
                </div>
                <span>111捣蛋计划广阔的发挥更健康方大化工给对方捣蛋计划广阔的发挥更健康方大化工给对方加更好地会计法更好的国际化的咖啡馆和答复客户给加更好地会计法更好的发挥更健康方大化工给对方捣蛋计划广阔的发挥更健康方大化工给对方加更好地会计法更好的国际化的咖啡馆和答发挥更健康方大化工给对方捣蛋计划广阔的更好的发挥更健康方大化工给对方捣蛋计划广阔的发挥更发挥更健康方大化工给对方加更好地会计法更好的国际化的咖啡馆和答复客户给加更好地会计法更好的复客户给加更好地会计法更好的国际化的咖啡馆和答复客户给123</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        ban: {
            type: Object
        }
    },
    data() {
        return {
            bannerData: {},
        }
    },
    mounted() {
        this.getBanners();
    },
    methods: {
        getBanners() {
            this.$axios.get(`/banner/list`)
                .then((response) => {
                    const result = response.data;
                    const data = result.data;
                    this.count = result.total;
                    this.bannerData = [];
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
                });

        },
    }

}
</script>
<style lang="scss">
@import "@/common/base.scss";

.root {
    width: 100%;
    height: 100%;
    margin-top: $topbarHeight;
    position: relative;
}

.banner {
    width: 100%;
    color: #475669;
    margin: 0 auto;

    .banner-ic {
        width: 100%;
        height: 520px;
    }

    .banner-title {
        position: absolute;
        width: 160px;
        bottom: 10px;
        right: 10px;
        color: #eee;
        font-size: 14px;
        z-index: 2;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: right;
    }
}

.art-card {
    width: 50%;
    height: 300px;
    position: absolute;
    background-color: #ffd04b;
    top: 480px;
    left: 25%;
    z-index: 10;

    img:nth-child(1) {
        width: 300px;
        position: absolute;
        left: 0;
        top: -50px;
        border-radius: 6px;
    }

    .main-art {
        height: 100%;
        margin-left: 300px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .art-details {
            width: 100%;
            position: relative;
            height: 26px;

            span {
                color: $text_blue;
                position: absolute;
                right: 10px;
                font-size: 12px;
                padding-left: 10px;
                padding-right: 10px;
                border-radius: 6px;
                border: 1px solid $text_blue;
            }
        }

        span:nth-child(2) {
            font-size: 16px;
            color: black;
            line-height: 26px;
        }
    }


}
</style>