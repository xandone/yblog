<template>
    <div class="tag-root">
        <div class="art-tag-span" v-for="(item,index) in tagList" @click="clickTag(item.type,index)">
            <div :class="index==indexMark?'active':'unactive'">
                <span>{{item.typeName}}</span>
                <span >({{item.count}})</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tagList: [],
            indexMark: -1,
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

        clickTag(type, index) {
            this.$emit('clickTag', type);
            this.indexMark = index;
        }
    }
}
</script>
<style lang="scss">
@import "@/common/base";

.tag-root {

    text-align: left;

    .art-tag-span {
        display: inline-block;

        div {
            padding-left: 6px;
            padding-right: 6px;
            padding-top: 2px;
            padding-bottom: 2px;
            margin-left: 8px;
            margin-top: 4px;
            border: 0.5px solid $text_yellow;
            border-radius: 2px;
            cursor: pointer;
        }


    }

    .active {
        background-color: $text_yellow;
    }

    .unactive {
        background-color: white;
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