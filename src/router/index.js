import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from 'pages/Home'
import Audio from 'pages/showAudio'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
})