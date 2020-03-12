<template>
    <div class="about">
        <div class="user-root">
            <img class="user-icon" src="../assets/head_icon.jpg" alt="">
            <span class="user-name">xandone</span>
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
    color: #333;
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
    align-items: center;
    margin-top: 60px;

    .user-icon {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .user-name {
        font-size: 40px;
        font-weight: bold;
    }

    .user-info {
        margin-top: 18px;
    }

    .info-img {
        width: 25px;
        height: 25px;
    }

    .github-span {
        display: flex;
        align-items: center;

        span {
            @extend user-span;
            margin-left: 2px;
            color: $text_blue;
        }
    }

    .mail-span {
        @extend user-span;
        display: flex;
        align-items: center;
        margin-top: 5px;

        span {
            margin-left: 2px;
        }
    }
}
</style>