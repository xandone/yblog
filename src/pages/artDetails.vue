<template>
    <div class="details-root">
        <div class="content-bg">
            <span class="art-title">{{artDetails.title}}</span>
            <div class="art-user-info">
                <span>xandone</span>
                <span>{{artDetails.postTime}}</span>
            </div>
            <div class="art-content" v-html="artDetails.contentHtml"></div>
            <comments :isShowComment="true" :jokeId="jokeId" :minRows='3' :maxRows='6' class="details-comment"></comments>
        </div>
    </div>
</template>
<script>
import comments from '@/components/comments'

export default {
    data() {
        return {
            artId: this.$route.params.artId,
            artDetails: {}
        }
    },

    created() {
        this.getArtDetails();
    },
    components: { comments },
    computed: {},

    methods: {
        getArtDetails() {
            console.log("artId=" + this.artId);
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

.details-root {
    width: $root_width_value;
    height: 100%;
    background-color: white;
    margin: 0 auto;

    img {
        max-width: 100%;
    }
}

.content-bg {
    padding: 10px;
    background-color: white;

    .art-title {
        font-size: 22px;
        font-weight: 600;
        width: 100%;
        text-align: center;
        padding: 20px 0;
        display: block;
    }

    .art-user-info {
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

    .art-content {
        height: 100%;
        text-align: left;
        padding: 0 30px 30px 30px;
        border-bottom: 1px solid #f0f0f0;
    }

    .details-comment {
        padding: 0 30px 50px 30px;
    }
}
</style>