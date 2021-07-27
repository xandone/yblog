<template>
    <div id="photo-root">
        <div v-for="(item ,index) in pics" v-if="index%2==0">
            <el-row>
                <el-col :span="12">
                    <div class="pic-cover">
                        <img :src="item.coverImg" class="place-img" alt="" fit="cover" @click="go2List()">
                        <span class="pic-descrip">{{item.name}}({{item.count||0}})</span>
                        <span class="pic-date">{{item.date}}</span>
                    </div>
                </el-col>
                <el-col :span="12" v-if="index+1<pics.length">
                    <div class="pic-cover">
                        <img :src="pics[index+1].coverImg" class="place-img" alt="" fit="cover" @click="go2List()">
                        <span class="pic-descrip">{{pics[index+1].name}}({{pics[index+1].count||0}})</span>
                        <span class="pic-date">{{item.date}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pics: [{
                    coverImg: "http://www.xandone.pub/FiF_SMCgQk8QoMJBcAQADFA7oHS3",
                    name: "电影海报",
                    date: "2012-01-12",
                    count: 10,
                },
                {
                    coverImg: "http://www.xandone.pub/FiF_SMCgQk8QoMJBcAQADFA7oHS3",
                    name: "电影海报2",
                    date: "2012-05-03",
                    count: 20,
                },
                {
                    coverImg: "http://www.xandone.pub/FiF_SMCgQk8QoMJBcAQADFA7oHS3",
                    name: "电影海报3",
                    date: "2012-06-15",
                    count: 30,
                }
            ],
        }
    },
    methods: {
        go2List() {
            this.$router.push('/picList');
        }
    }
}
</script>
<style lang="scss">
@import "@/common/base.scss";

#photo-root {
    width: $root_width_value;
    padding: 10px;
    text-align: left;

    .pic-cover {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        padding: 6px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

        .place-img {
            width: 100%;
            height: 220px;

            // box-shadow: 2px 2px 5px #666;
        }

        .pic-descrip {
            font-size: 15px;
            color: #333;
            margin-top: 6px;
        }

        .pic-date {
            font-size: 14px;
            color: #333;
            margin-top: 6px;
        }
    }

}
</style>