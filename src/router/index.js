import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Audio from 'pages/showAudio'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    },{
        path: '/audio',
        name: 'audio',
        component: Audio
    }]
})