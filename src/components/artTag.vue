<!-- 编程文章分类 -->
<template>
    <div class="tag-root">
        <div class="art-tag-span" v-for="(item,index) in tagList" @click.stop="clickTag(item.type,index)">
            <div :class="index==indexMark?'active':'unactive'">
                <span>{{item.typeName}}</span>
                <span>({{item.count}})</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tagList: [],
                indexMark: 0,
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
                        // this.tagList.unshift(tempBean);
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
        width: 70%;
        text-align: left;

        .art-tag-span {
            display: inline-block;

            div {
                padding-left: 6px;
                padding-right: 6px;
                padding-top: 2px;
                padding-bottom: 2px;
                margin-left: 8px;
                margin-top: 8px;
                border: 0.5px solid #ddd;
                border-radius: 2px;
                cursor: pointer;
                position: relative;
            }

            div::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                transition: .3s;
                opacity: .3;
                background: $text_blue;
                transform-origin: left;
                transform: scaleX(0);
            }

            div:hover::after {
                transform: scaleX(1);
            }

        }

        .active {
            background-color: $text_blue;
            color: white;
        }

        .unactive {
            background-color: white;
            color: black;
        }

        span {
            font-size: 14px;
            font-style: italic;
        }

        // span:nth-child(1) {
        //     color: #666;
        // }

        // span:nth-child(2) {
        //     color: $text_blue;
        // }
    }
</style>