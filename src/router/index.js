import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import splash from '@/pages/splash.vue'
import articleList from '@/pages/articleList'
import photoWall from '@/pages/photoWall'
import essayList from '@/pages/essayList'
import aboutMe from '../pages/aboutMe.vue'
import artDetails from '@/pages/artDetails.vue'
import essayDetails from '@/pages/essayDetails.vue'
import archive from '@/pages/archive.vue'
import picList from '@/pages/picList.vue'

Vue.use(VueRouter)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'splash',
        component: splash
    }, {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: '/articleList',
                name: 'articleList',
                component: articleList,
            }, {
                path: '/photoWall',
                name: 'photoWall',
                component: photoWall,
            }, {
                path: '/essayList',
                name: 'essayList',
                component: essayList,
            }, {
                path: '/aboutMe',
                name: 'aboutMe',
                component: aboutMe,
            },
            {
                path: '/archive',
                name: 'archive',
                component: archive,
            }, {
                path: '/picList',
                name: 'picList',
                component: picList,
            }
        ]
    }, {
        path: '/artDetails/:artId',
        name: 'artDetails',
        component: artDetails,
    }, {
        path: '/essayDetails/:artId',
        name: 'essayDetails',
        component: essayDetails,
    }, ]
});