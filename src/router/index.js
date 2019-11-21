import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import mainVue from '@/pages/main'
import articleList from '@/pages/articleList'
import aboutMe from '../pages/aboutMe.vue'

Vue.use(VueRouter)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        children: [{
            path: '/',
            name: 'mainVue',
            component: mainVue,
        }, ]
    }, {
        path: '/articleList',
        name: 'articleList',
        component: articleList,
    }, {
        path: '/aboutMe',
        name: 'aboutMe',
        component: aboutMe,
    }, ]
});