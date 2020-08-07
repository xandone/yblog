<template>
    <div class="details-root">
        <div class="content-bg">
            <span class="art-title">{{artDetails.title}}</span>
            <div class="dart-user-info">
                <span>{{artDetails.typeName}}</span>
                <span>{{artDetails.postTime}}</span>
            </div>
            <div class="art-content" v-html="artDetails.contentHtml"></div>
            <comments :isShowComment="true" :artId="artId" :minRows='3' :maxRows='6' class="details-comment"></comments>
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
<style lang="scss" scoped>
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
        width: 100%;
        text-align: left;
        padding: 20px 0;
        display: block;
        font-size: 28px;
        font-weight: 600;
        margin-left: 20px;
    }

    .dart-user-info {
        text-align: left;
        margin-left: 20px;
        font-size: 13px;

        span:nth-child(1) {
            margin-right: 10px;
            color: $text_yellow;
            cursor: default;
        }

        span:nth-child(2) {
            color: #999;
        }
    }

    .art-content {
        height: 100%;
        text-align: left;
        padding: 0 20px 20px 20px;
        border-bottom: 1px solid #f0f0f0;
        line-height: 30px;
    }

    .details-comment {
        padding: 0 30px 50px 30px;
    }
}

code {
    font-size: 16px;
    color: #555;
}

a {
    color: $text_blue;
}

pre {
    background-color: #f6f6f6;
}
</style>