<template>
    <div class="essay-details-root">
        <div class="essay-content-bg">
            <span class="essay-title">{{artDetails.title}}</span>
            <div class="essay-user-info">
                <span>xandone</span>
                <span>{{artDetails.postTime}}</span>
            </div>
            <div class="essay-content" v-html="artDetails.contentHtml"></div>
            <comments :isShowComment="true" :artId="artId" :minRows='3' :maxRows='6' class="essay-details-comment"></comments>
        </div>
    </div>
</template>
<script>
import comments from '@/components/comments'

export default {
    data() {
        return {
            artId: this.$route.params.artId,
            artDetails: {},
        }
    },

    created() {
        this.getArtDetails();
    },
    components: { comments },
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
    }
}
</script>
<style lang="scss">
@import "@/common/base.scss";

.essay-details-root {
    width: $root_width_value;
    height: 100%;
    background-color: white;
    margin: 0 auto;

    img {
        max-width: 80% !important;
    }
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
        text-align: center;

        span:nth-child(1) {
            font-size: 18px;
            margin-right: 10px;
            color: $text_yellow;
            cursor: default;
        }

        span:nth-child(2) {
            font-size: 13px;
            color: #999;
        }
    }

    .essay-content {
        height: 100%;
        text-align: left;
        padding: 0 20px 20px 20px;
        border-bottom: 1px solid #f0f0f0;
        line-height: 30px;
    }

    .essay-details-comment {
        padding: 0 30px 50px 30px;
    }

    a {
        color: $text_blue;
    }
}

// code {
//     font-size: 16px;
// }

// pre {
//     background-color: #f6f6f6;
// }
</style>