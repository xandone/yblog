<!-- 杂文详情页 -->
<template>
    <div id="essay-details-root">
        <div class="essay-content-bg">
            <span class="essay-title">{{artDetails.title}}</span>
            <div class="essay-user-info">
                <span>xandone</span>
                <img src="../assets/date_ic.png" alt="" />
                <span>{{artDetails.postTime}}</span>
            </div>
            <div class="essay-content" v-html="artDetails.contentHtml"></div>
            <comments :isShowComment="true" :artId="artId" class="essay-details-comment"></comments>
        </div>
        <ElImageViewer v-if="dialogImgVisible" :on-close="closeViewer" :url-list="[selectImgSrc]" />
    </div>
</template>
<script>
    import comments from '@/components/comments'
    import ElImageViewer from 'element-ui/packages/image/src/image-viewer'

    export default {
        data() {
            return {
                artId: this.$route.params.artId,
                artDetails: {},
                dialogImgVisible: false,
                selectImgSrc: ''
            }
        },

        created() {
            this.getArtDetails();
        },
        updated() {
            this.setImgOnClick();
        },
        components: {
            comments,
            ElImageViewer
        },
        computed: {},

        methods: {
            getArtDetails() {
                this.$axios.get(`/essay/essayDetails`, {
                        params: {
                            essayId: this.artId
                        }
                    })
                    .then((response) => {
                        const result = response.data;
                        const item = result.data[0];
                        this.artDetails = {};
                        this.artDetails = item;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            setImgOnClick() {
                let root = document.getElementsByClassName('essay-content')[0];
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

    #essay-details-root {
        width: $art_width_value;
        height: 100%;
        background-color: white;
        margin: 0 auto;

        img {
            max-width: 80% !important;
        }

        .el-image img {
            max-width: 100% !important;
        }


        .essay-content-bg {
            padding: 10px;
            background-color: white;

            .essay-title {
                font-size: 28px;
                font-weight: 600;
                width: 100%;
                text-align: center;
                padding: 20px 0;
                display: block;
            }

            .essay-user-info {
                display: flex;
                align-items: center;
                justify-content: center;


                span:nth-child(1) {
                    font-size: 18px;
                    margin-right: 10px;
                    color: $text_yellow;
                    cursor: default;
                }

                img {
                    margin-left: 2px;
                    margin-right: 2px;
                }

                span:nth-child(3) {
                    font-size: 13px;
                    color: #666;
                }

            }

            .essay-content {
                height: 100%;
                text-align: left;
                padding: 0 20px 20px 20px;
                border-bottom: 1px solid #f0f0f0;
                line-height: 30px;
                color: #333;
            }

            .essay-details-comment {
                padding: 0 30px 50px 30px;
            }

            a {
                color: $text_blue;
            }
        }

        .el-icon-circle-close {
            color: white;
        }
    }
</style>