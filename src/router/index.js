import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from './modules/Auth'
import Chat from './modules/Chat'
import Help from './modules/Help'
import MyCourses from './modules/MyCourses'
import Tests from './modules/Tests'
import Library from './modules/Library'
import CoursePayment from './modules/CoursePayment'
import WatchCourse from './modules/WatchCourse'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'main'
        }
    },
    ...Auth,
    ...Chat,
    ...Help,
    ...MyCourses,
    ...Tests,
    ...Library,
    ...CoursePayment,
    ...WatchCourse
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: () => ({
        y: 0,
    }),

})

export default router
