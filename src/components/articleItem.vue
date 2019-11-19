<template>
    <div>
        <div class="title-root">
            <a href="#">
            <span class="title-span">{{bean.title}}</span>
        </a>
        </div>
        <div class="content-root">
            <span>{{bean.content}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        bean: {
            type: Object
        }
    },
}
</script>
<style lang="scss">
.title-root {
    display: flex;

    .title-span {
        font-weight: bold;
        font-size: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        width: 600px;
        text-align: left;
    }
}

.content-root {
    text-align: left;

    span {
        overflow: hidden;
        font-size: 16px;
        color: #222;
    }
}
</style>