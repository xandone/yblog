<template>
    <div id="pic-root">
        <div v-for="(item ,index) in pics" v-if="index%2==0">
            <tr>
                <td>
                    <div class="pic-cover">
                        <img :src="item.coverImg" class="place-img" alt="" fit="cover">
                        <span class="pic-descrip">{{item.name}}({{item.count||0}})</span>
                    </div>
                </td>
                <td v-if="index+1<pics.length">
                    <div class="pic-cover">
                        <img :src="item.coverImg" class="place-img" alt="" fit="cover">
                        <span class="pic-descrip">{{pics[index+1].name}}({{pics[index+1].count||0}})</span>
                    </div>
                </td>
            </tr>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pics: [{
                    coverImg: "http://www.xandone.pub/FuGbIQJe3r-yAO0EjDBfA047NghH",
                    name: "电影海报",
                    count: 10,
                },
                {
                    coverImg: "http://www.xandone.pub/FuGbIQJe3r-yAO0EjDBfA047NghH",
                    name: "电影海报2",
                    count: 20,
                },
                {
                    coverImg: "http://www.xandone.pub/FuGbIQJe3r-yAO0EjDBfA047NghH",
                    name: "电影海报3",
                    count: 30,
                }
            ],
        }
    }
}
</script>
<style lang="scss">
@import "@/common/base.scss";

#pic-root {
    width: $root_width_value;
    padding: 10px;
    text-align: left;

    .pic-cover {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;

        .place-img {
            width: 350px;
            height: 200px;
            margin-right: 10px;
            box-shadow: 2px 2px 5px #666;
        }

        .pic-descrip {
            font-size: 15px;
            color: #333;
            margin-top: 6px;
        }
    }

    // .tr-width {
    //     width: 40%;
    //     background-color: red;
    // }


}
</style>