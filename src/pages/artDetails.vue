<template>
    <div id="art-details-root">
        <div class="content-bg">
            <span class="art-title">{{artDetails.title}}</span>
            <div class="dart-user-info">
                <span>{{artDetails.typeName}}</span>
                <img src="../assets/date_ic.png" alt="" />
                <span>{{artDetails.postTime}}</span>
            </div>
            <div id="demo" class="art-content" v-html="artDetails.contentHtml"></div>
            <component :is="catalogCom" v-bind="catalogProps" class="catalog"></component>
            <comments :isShowComment="true" :artId="artId" class="details-comment"></comments>
        </div>
        <ElImageViewer v-if="dialogImgVisible" :on-close="closeViewer" :url-list="[selectImgSrc]" />
    </div>
</template>
<script>
    import comments from '@/components/comments'
    import SideCatalog from '@/components/SideCatalog'
    import ElImageViewer from 'element-ui/packages/image/src/image-viewer'

    export default {
        data() {
            return {
                artId: this.$route.params.artId,
                artDetails: {},
                catalogProps: {
                    // 内容容器selector(必需)
                    container: "#demo",
                    height: "calc(100% - 100px)",
                    levelList: ["h1", "h2", "h3", "h4"],
                },
                catalogCom: '',
                dialogImgVisible: false,
                selectImgSrc: ''
            }
        },

        created() {
            this.getArtDetails();
            // document.title="dfsdfsdf"
        },
        components: {
            comments,
            SideCatalog,
            ElImageViewer
        },
        mounted() {},
        updated() {
            this.setImgOnClick();
        },
        computed: {},

        methods: {
            getArtDetails() {
                this.$axios.get(`/art/artDetails`, {
                        params: {
                            artId: this.artId
                        }
                    })
                    .then((response) => {
                        const result = response.data;
                        const item = result.data[0];
                        this.artDetails = {};
                        this.artDetails = item;
                        this.catalogCom = "SideCatalog";
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },

            setImgOnClick() {
                let root = document.getElementsByClassName('art-content')[0];
                if (root === null) {
                    return;
                }
                let imgs = root.getElementsByTagName("img");
                let that = this;
                imgs.forEach(item => {
                    item.addEventListener('click', function (e) {
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

    #art-details-root {
        width: $art_width_value;
        height: 100%;
        background-color: white;
        margin: 0 auto;

        img {
            max-width: 90%;
        }

        .catalog {
            position: fixed;
            top: 10%;
            right: 2%;
            width: 14%;
            z-index: 10;
            text-align: left;
            font-size: 15px;
        }

        .el-image img {
            max-width: 100% !important;
        }


        .content-bg {
            padding: 10px;
            background-color: white;

            .art-title {
                width: 100%;
                text-align: left;
                padding: 20px 0;
                display: block;
                font-size: 28px;
                font-weight: 600;
                margin-left: 20px;
            }

            .dart-user-info {
                display: flex;
                align-items: center;
                text-align: left;
                margin-left: 20px;
                font-size: 13px;

                span:nth-child(1) {
                    margin-right: 10px;
                    color: $text_yellow;
                    cursor: default;
                }

                img {
                    margin-left: 2px;
                    margin-right: 2px;
                }

                span:nth-child(3) {
                    color: #666;
                }
            }

            .art-content {
                height: 100%;
                text-align: left;
                padding: 0 20px 20px 20px;
                border-bottom: 1px solid #f0f0f0;
                line-height: 30px;
                color: #333;
            }

            .details-comment {
                padding: 0 30px 50px 30px;
            }

            a {
                color: $text_blue;
            }
        }

        code {
            font-size: 16px;
            color: #333;
            // font-weight: bold;
            font-family: "Menlo", "Courier New", "Monaco", "Spoqa Han Sans", monospace;
        }

        pre {
            padding: 10px 20px;
            background-color: #f6f6f6;
            overflow: auto;
        }

        .el-icon-circle-close {
            color: white;
        }
    }
</style>