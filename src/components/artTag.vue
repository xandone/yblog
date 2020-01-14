<template>
    <div class="tag-root">
        <a v-for="item in tagList" @click="clickTag(item.type)" >
            <div>
              <span >{{item.typeName}}</span>
              <span >({{item.count}})</span>  
            </div>
        </a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tagList: [],
        }
    },

    mounted() {
        this.getTagList();
    },

    methods: {
        getTagList() {
            this.$axios.get(`/art/artTypeList`)
                .then((response) => {
                    const bean = response.data;
                    const data = bean.data;
                    data.forEach(item => {
                        const tagBean = {};
                        tagBean.typeName = item.typeName;
                        tagBean.count = item.count;
                        tagBean.type = item.type;
                        this.tagList.push(tagBean);
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

        },

        clickTag(type) {
            this.$emit('clickTag', type);
        }
    }
}
</script>
<style lang="scss">
@import "@/common/base";

.tag-root {

    text-align: left;

    a:link {
        text-decoration: underline;
    }

    a {
        display: inline-block;
    }

    div {
        padding-left: 6px;
        padding-right: 6px;
        margin-left: 6px;
        margin-top: 4px;
        border: 0.5px solid $text_yellow;
        border-radius: 6px;
    }

    span {
        font-size: 14px;
    }

    span:nth-child(1) {}

    span:nth-child(2) {
        color: $text_blue;
    }
}
</style>