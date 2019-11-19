<template>
    <div class="article-root">
        <div>
            <articleItem v-for="item in tableData " :bean='item' v-bind:key='item.index'></articleItem>
        </div>
    </div>
</template>
<script>
import articleItem from '@/components/articleItem'

export default {
    components: {
        articleItem
    },

    data() {
        return {
            tableData: []
        }
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        getArticleList() {
            for (let i = 0; i < 3; i++) {
                const table = {};
                table.index = i;
                table.title = "几点回家福克斯的恢复开始的会计师";
                table.content = "的开发技术的开放接口适得府君书肯德基福克斯的经费可适当加咖啡就开始独领风骚东方嘉盛离开的飞机开连锁店解放路可视对讲分开了的开发技术的开放接口适得府君书肯德基福克斯的经费可适当加咖啡就开始独领风骚东方嘉盛离开的飞机开连锁店解放路可视对讲分开了的开发技术的开放接口适得府君书肯德基福克斯的经费可适当加咖啡就开始独领风骚东方嘉盛离开的飞机开连锁店解放路可视对讲分开了";

                this.tableData.push(table);
            }
        }
    }

}
</script>
<style lang='scss'>
@import "@/common/base.scss";

.article-root {
    width: 60%;
    height: 100%;
    margin: 0 auto;
}
</style>