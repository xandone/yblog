<!-- 个人信息 -->
<template>
    <div id="blog-info-root">
        <div class="user-root">
            <img class="user-icon" src="../assets/head_icon.jpg" alt="">
            <span class="user-name">xandone</span>
            <span class="user-sign">呀哈哈~</span>
            <div class="art-archive">
                <div class="archive-code-info">
                    <i class="el-icon-monitor el-img"></i>
                    <span class="archive-tv" @click.stop="handleSelect(2)">编 程({{adminInfo.artCounts||'0'}})</span>
                </div>
                <div class="archive-code-info">
                    <i class="el-icon-document el-img"></i>
                    <span class="archive-tv" @click.stop="handleSelect(3)">杂 文({{adminInfo.essayCounts||'0'}})</span>
                </div>
                <!--   <div class="archive-code-info">
                    <img src="../assets/pic_ic.png" alt=""> <span class="archive-tv" @click.stop="handleSelect(6)">图 片({{adminInfo.essayCounts||'0'}})</span>
                </div> -->
                <div class="archive-code-info">
                    <i class="el-icon-folder-opened el-img"></i>
                    <span class="archive-tv" @click.stop="handleSelect(4)">归 档({{adminInfo.totalArts}})</span>
                </div>
                <div class="archive-code-info">
                    <i class="el-icon-warning-outline el-img"></i>
                    <span class="archive-tv" @click.stop="handleSelect(5)">关 于</span>
                </div>
                <div class="archive-code-info">
                    <i class="el-icon-user el-img"></i>
                    <span class="archive-tv" @click.stop="handleSelect(7)">后 台</span>
                </div>
            </div>
        </div>
        <div class="ip-record">
            <iprecord></iprecord>
        </div>
    </div>
</template>
<script>
    import vueEvent from '@/bus/vueEvent.js'
    import iprecord from '@/components/iprecord'
    export default {
        components: {
            iprecord
        },
        data() {
            return {
                adminInfo: {
                    totalArts: 0
                },
                topbarIndex: 2,
            }
        },
        created() {
            this.getAdminInfo();
            var _this = this;
            vueEvent.$on('index', function (key) {
                _this.topbarIndex = key;
            });
        },
        methods: {
            handleSelect(index) {
                switch (index) {
                    case 1:
                        this.$router.push('/');
                        break;
                    case 2:
                        this.$router.push('/articleList');
                        break;
                    case 3:
                        this.$router.push('/essayList');
                        break;
                    case 4:
                        this.$router.push('/archive');
                        break;
                    case 5:
                        this.$router.push('/aboutMe');
                        break;
                    case 6:
                        this.$router.push('/photoWall');
                        break;
                    case 7:
                        window.open('http://xandone.pub/yblogmanager/', '_blank');
                        break;
                }
            },
            getAdminInfo() {
                this.$axios.get(`/admin/userInfo`)
                    .then((response) => {
                        const result = response.data;
                        const item = result.data[0];
                        this.adminInfo = {};
                        this.adminInfo = item;
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

    user-span {
        font-size: 18px;
        color: #555;
        font-style: italic;
    }

    #blog-info-root {
        width: 25%;
        height: 100%;
        padding-top: 5%;
        position: fixed;
        border-right: 1px solid #e2e8f0;
        display: flex;
        justify-content: center;

        .user-root {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            .user-icon {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                transition-duration: 1.5s;
                transition-timing-function: ease-out;
            }

            .user-icon:hover {
                transform: rotateY(360deg);
            }

            .user-name {
                font-size: 40px;
                font-weight: bold;
                text-align: left;
            }

            .user-sign {
                max-width: 100%;
                font-size: 16px;
                text-align: left;
                font-style: italic;
                word-break: normal;
                padding: 10px;
            }

            .user-info {
                margin-top: 18px;
                display: flex;
                align-items: center;
            }

            .info-img {
                width: 22px;
                height: 22px;
            }

            .github-span {
                display: flex;
                align-items: center;

                span {
                    @extend user-span;
                    color: $text_blue;
                }
            }

            .mail-span {
                @extend user-span;
                display: flex;
                align-items: center;
                margin-left: 10px;
            }

            .art-archive {
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                align-items: left;
            }

            .archive-code-info {
                display: flex;
                align-items: center;
                font-size: 16px;
                // font-weight: bold;
                color: #333;
                line-height: 30px;

                img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }

                .el-img {
                    font-size: 20px;
                    margin-right: 10px;
                }
            }

            .archive-tv:hover {
                cursor: pointer;
            }

            .archive-tv {
                position: relative;
                font-size: 16px;
                color: $text_black;
            }

            .archive-tv::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 5px;
                height: 2px;
                transition: .3s;
                opacity: .6;
                background: $text_black;
                transform-origin: center;
                transform: scaleX(0);
            }

            .archive-tv:hover::after {
                transform: scaleX(1);
            }
        }

        .ip-record {
            position: absolute;
            bottom: 12%;
        }
    }
</style>