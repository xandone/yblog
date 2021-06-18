<template>
    <div id="about">
        <div class="project-info">
            <div class="type-title">
                <img src="../assets/line_ic.png" alt=""><span class="project-info-title">项目信息汇总</span>
            </div>
            <div class="source-code-info">
                <img src="../assets/vue_web.png"alt=""> <span > 本站源码：</span><a href="https://github.com/xandone/yblog" target="_blank">yblog</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/manager_web.png"alt=""> <span >管理系统：</span><a href="https://github.com/xandone/yblog-manager" target="_blank">yblog-manager</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/api_ic.png"alt=""> <span >服务端：</span><a href="https://github.com/xandone/yblogserver" target="_blank">yblogserver</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/android.png"alt=""> <span >Android端：</span><a href="https://github.com/xandone/yblogapp" target="_blank">yblogapp(Java)</a><span style="margin-left:10px">|</span>
                <a href="https://github.com/xandone/yblogappkt" target="_blank" style="margin-left:10px">yblogapp(kotlin)</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/wx_project.png"alt=""> <span >微信小程序：</span><a href="https://github.com/xandone/yblog-wx" target="_blank">yblog-wx</a>
            </div>
            <div class="qr-code-root">
                <div class="qr-code-android">
                    <div class="type-title">
                        <img src="../assets/line_ic.png" alt=""> <span >Android apk下载</span>
                    </div>
                    <img class="qr-code-android-ma" src="../assets/yblogapp_qr_code.png" alt="">
                </div>
                </div>
            </div>
        </div>
</template>
<script>
import vueEvent from '@/bus/vueEvent.js'
export default {
    data() {
        return {
            adminInfo: {},
        }
    },
    created() {},
    mounted() {
        window.scrollTo(0, 0);
    },
    methods: {

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

#about {
    width: $root_width_value;
    position: relative;
    background-color: white;
    display: flex;
    margin-left: 20px;

    .type-title {
        text-align: left;
        font-size: 20px;
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;

        img {
            width: 25px;
        }
    }

    .project-info {
        width: 100%;
        text-align: left;
        margin-top: 20px;

        .project-info-title {}

        .source-code-info {
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #333;
            font-weight: bold;
            line-height: 35px;

            img {
                width: 24px;
                height: 24px;
                margin-right: 10px;
            }

            a {
                font-size: 16px;
            }
        }

        a {
            font-size: 15px;
            color: #3ca5f6;
        }

        .qr-code-root {
            margin-top: 10px;
            text-align: left;
            border-top: #e2e8f0 solid 1px;
            padding-top: 20px;

            .qr-code-android {
                display: flex;
                flex-direction: column;
            }

            .qr-code-android-ma {
                width: 200px;
                height: 200px;
            }

            .qr-info {
                font-size: 18px;
                font-weight: bold;
                color: #333;
                margin-bottom: 5px;
                display: flex;
                align-items: center;

                span {
                    margin-left: 6px;
                }

                a {
                    font-size: 15px;
                    color: #3ca5f6;
                }
            }
        }
    }
}
</style>