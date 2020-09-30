<template>
    <div class="about">
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
            <div class="qr-code-root">
                <div class="qr-code-android">
                    <div class="qr-info">
                        <span >Android app下载</span><a href="https://github.com/xandone/yblogapp" target="_blank">（项目源码）</a>
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

.about {
    width: $root_width_value;
    height: 100%;
    padding: 0;
    margin: 0 auto;
    position: relative;
    background-color: white;
}

.user-root {
    left: 2%;
    top: 2%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 60px;

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

    .qr-code-root {
        margin-top: 10px;
        text-align: left;
        border-top: #999 solid 1px;
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

            a {
                font-size: 15px;
                color: #3ca5f6;
            }
        }
    }
}
</style>