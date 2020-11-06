<template>
    <div id="about">
        <div class="user-root">
            <img class="user-icon" src="../assets/head_icon.jpg" alt="">
            <span class="user-name">xandone</span>
            <span class="user-sign">Somebody has to win, so why not be me?</span>
            <div class="user-info">
                <a href="https://github.com/xandone" target="_blank">
                   <div class="github-span">
                      <img class="info-img" src="../assets/github.png" alt="">
                      <span>github</span>
                   </div>
                </a>
                <div class="mail-span">
                    <img class="info-img" src="../assets/mails.png" alt="">
                    <span >{{adminInfo.email}}</span>
                </div>
                <div class="mail-span">
                    <img class="info-img" src="../assets/record.png" alt="">
                    <span >{{adminInfo.totalArts}}篇</span>
                </div>
            </div>
        </div>
        <div class="project-info">
            <span class="project-info-title">项目信息汇总</span>
            <div class="source-code-info">
                <img src="../assets/vue_web.png"alt=""> <span > 本站源码托管于：</span><a href="https://github.com/xandone/yblog" target="_blank">yblog</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/manager_web.png"alt=""> <span >管理系统源码：</span><a href="https://github.com/xandone/yblog-manager" target="_blank">yblog-manager</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/api_ic.png"alt=""> <span >后台源码：</span><a href="https://github.com/xandone/yblogserver" target="_blank">yblogserver</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/android.png"alt=""> <span >Android端源码：</span><a href="https://github.com/xandone/yblogapp" target="_blank">yblogapp(Java)</a><span style="margin-left:10px">|</span>
                <a href="https://github.com/xandone/yblogappkt" target="_blank" style="margin-left:10px">yblogapp(kotlin)</a>
            </div>
            <div class="source-code-info">
                <img src="../assets/wx_project.png"alt=""> <span >微信小程序源码：</span><a href="https://github.com/xandone/yblog-wx" target="_blank">yblog-wx</a>
            </div>
            <div class="qr-code-root">
                <div class="qr-code-android">
                    <div class="qr-info">
                        <span >Android apk下载</span>
                    </div>
                    <img src="../assets/yblogapp_qr_code.png" alt="">
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
    created() {
        vueEvent.$emit('index', '4');
        this.getAdminInfo();
    },
    methods: {
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

#about {
    width: $root_width_value;
    min-height: 100%;
    padding: 70px 0 0;
    margin: 0 auto;
    position: relative;
    background-color: white;
    display: flex;
}

.user-root {
    left: 2%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-right: 20px;
    border-right: 1px solid #e2e8f0;

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
        font-size: 18px;
        max-width: 250px;
        text-align: left;
        font-style: italic;
    }

    .user-info {
        margin-top: 18px;
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
            margin-left: 10px;
            color: $text_blue;
        }
    }

    .mail-span {
        @extend user-span;
        display: flex;
        align-items: center;
        margin-top: 5px;

        span {
            margin-left: 10px;
        }
    }
}

.project-info {
    width: 100%;
    margin: 0 80px;
    text-align: left;

    .project-info-title {
        font-size: 18px;
        color: #333;
        font-weight: bold;
    }

    .source-code-info {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #333;
        font-weight: bold;
        line-height: 35px;

        img {
            width: 26px;
            height: 26px;
            margin-right: 10px;
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

        img {
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
</style>