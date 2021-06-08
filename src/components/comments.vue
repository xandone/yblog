<template>
    <div id="comment-root">
        <div style="padding: 10px;">
            <span >{{comments}}</span>
            <div v-for='item in commentData' class="comment-info-root">
                <div class="comment-user-info">
                    <div>
                        <img :src="item.commentIcon===null?require(`@/assets/user_boy.png`):item.commentIcon" alt="" class="comment-ic" @click.stop="go2fchain(item.visitorUrl)">
                        <span style="cursor: default">{{item.commentNick}}</span>
                        <span class="comment-browser-version">{{item.commentUserVer}}</span>
                    </div>
                </div>
                <div class="conment-detail">
                    <span >{{item.commentDetails}}</span>
                </div>
                <div class="comment-date">
                    <span >
                            {{item.commentDate}}
                    </span>
                </div>
            </div>
        </div>
        <div class="Pagination" style="text-align: left;margin-top: 10px;">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10" layout="total, prev, pager, next" :total="count">
            </el-pagination>
        </div>
        <div class="visitor">
            <input placeholder="昵称" v-model="nickname">
            </input>
            <input placeholder="邮箱" v-model="email">
            </input>
            <input placeholder="网址(http://) 非必填" v-model="visitorUrl">
            </input>
        </div>
        <div class="repaly-root">
            <el-input type="textarea" :autosize="{ minRows: minRows, maxRows: maxRows}" placeholder="请输入内容.." v-model="details" style="width: 100%;" maxlength="200" show-word-limit>
            </el-input>
            <el-button @click="addComment" type="primary" size="small" class="addbtn">发 布</el-button>
        </div>
    </div>
</template>
<script>
import { getBrowserInfo } from '@/utils/simpleUtils'
import { setStore, getStore } from '@/utils/utils.js'
import { VISITOR_INFO_KEY } from '@/config/env'
export default {
    props: {
        isShowComment: false,
        artId: { type: String },
    },
    data() {
        return {
            minRows: 5,
            maxRows: 8,
            commentData: [],
            page: 1,
            row: 10,
            count: 0,
            currentPage: 1,
            details: '',
            nickname: '',
            email: '',
            visitorUrl: '',
        }
    },

    computed: {
        comments() {
            if (this.isShowComment) {
                this.getJokeComments();
            }
        }
    },

    mounted() {
        let json = getStore(VISITOR_INFO_KEY);
        if (!json || json === undefined) {
            return;
        }
        let visitor = JSON.parse(json);
        this.nickname = visitor.nickname;
        this.email = visitor.email;
        this.visitorUrl = visitor.visitorUrl;
    },

    methods: {
        toUserView(item) {
            this.$router.push('/aboutMe');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.page = val;
        },
        getJokeComments() {
            this.$axios.get(`/comment/list`, {
                    params: {
                        page: this.page,
                        row: this.row,
                        artId: this.artId,
                    }
                })
                .then((response) => {
                    const art = response.data;
                    const data = art.data;
                    this.count = art.total;
                    this.commentData = [];
                    data.forEach(item => {
                        const tableData = {};
                        tableData.commentDate = item.commentDate;
                        tableData.commentDetails = item.commentDetails;
                        tableData.commentUserVer = item.commentUserVer;
                        tableData.commentIcon = item.commentIcon;
                        tableData.commentId = item.commentId;
                        tableData.commentNick = item.nickname;
                        tableData.commentUserId = item.commentUserId;
                        tableData.artId = item.artId;
                        tableData.visitorUrl = item.visitorUrl;

                        this.commentData.push(tableData);
                    })
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        addComment() {
            this.saveVisitorInfo();
            if (!this.nickname) {
                alert('请输入昵称');
                return;
            }
            if (!this.email) {
                alert('请输入邮箱');
                return;
            }
            this.saveVisitorInfo();
            if (!this.details) {
                alert('请输入回复内容');
                return;
            }
            let commentUserVer = getBrowserInfo()[0];
            this.$axios.post(`/comment/add`,
                    this.$qs.stringify({
                        'artId': this.artId,
                        'details': this.details,
                        'nickname': this.nickname,
                        'email': this.email,
                        'visitorUrl': this.visitorUrl,
                        'commentUserVer': commentUserVer,
                    }))

                .then((response) => {
                    const result = response.data;
                    if (result && result.code === 200) {
                        const data = result.data[0];
                        const tableData = {};
                        tableData.commentDetails = data.commentDetails;
                        tableData.commentUserVer = data.commentUserVer;
                        tableData.commentIcon = data.commentIcon;
                        tableData.commentNick = data.nickname;
                        tableData.commentDate = data.commentDate;
                        this.commentData.unshift(tableData);
                        this.count++;
                        this.details = '';
                        this.increment();
                        this.openSuccess('恭喜，发布成功!');
                    } else if (result.code === 201) {
                        this.openToast('发布失败，您处于禁言状态');
                    } else {
                        this.openToast('发布失败，服务器异常');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.openToast('服务器异常');
                });

        },
        increment() {
            this.$emit('increment');
        },
        saveVisitorInfo() {
            let Visitor = {
                nickname: this.nickname,
                email: this.email,
                visitorUrl: this.visitorUrl,
            }
            setStore(VISITOR_INFO_KEY, JSON.stringify(Visitor));
        },

        go2fchain(visitorUrl) {
            console.log("visitorUrl=" + visitorUrl);
            if (visitorUrl) {
                window.open(visitorUrl);
            }
        },
        openToast(msg) {
            this.$notify.error({
                title: '错误',
                message: msg
            });
        },
        openSuccess(msg) {
            this.$message({
                message: msg,
                type: 'success'
            });
        },
    },

}
</script>
<style lang="scss">
@import "@/common/base.scss";

#comment-root {

    .comment-info-root {
        border-bottom: 1px solid #f0f0f0;
        padding: 10px 0;
    }

    .visitor {
        display: flex;
        border: 1px solid #e2e8f0;
        margin-top: 10px;

        input {
            margin-left: 10px;
            line-height: 40px;
            background-color: white;
            border: 0;
            outline: none;
            flex: 1;
        }

        input::-webkit-input-placeholder {
            color: #bbb;
        }
    }

    .repaly-root {
        margin-top: 5px;
        margin-bottom: 100px;
        text-align: left;

        .addbtn {
            margin-top: 5px;
            float: right;
        }
    }

    .comment-ic {
        width: 38px;
        height: 38px;
        border-radius: 10%;
    }

    .comment-user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            align-items: center;
            padding: 10px 0;

            span {
                margin-left: 10px;
                font-size: 14px;
                color: #555;
            }
        }

        .comment-browser-version {
            font-size: 13px;
            color: #aaa;
        }
    }

    .comment-date {
        font-size: 13px;
        color: #bbb;
        padding-left: 40px;
        text-align: left;
    }

    .conment-detail {
        font-size: 14px;
        color: #333;
        padding: 10px 40px;
        text-align: left;
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: $text_yellow;
        color: white;
    }
}
</style>