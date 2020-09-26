const myCourses = [
    {
        path: '/my-courses',
        name: 'my-courses',
        meta: {
            layout: 'main'
        },
        component: () => import('@/views/MyCourses')
    },
    {
        path: '/all-courses',
        name: 'all-courses',
        meta: {
            layout: 'main'
        },
        component: () => import('@/views/MyCourses/AllCourses')
    },
    {
        path: '/show',
        name: 'show-course',
        meta: {
            layout: 'main'
        },
        component: () => import('@/views/MyCourses/show')
    },
    {
        path: '/course-info',
        name: 'course-info',
        meta: {
            layout: 'main'
        },
        component: () => import('@/views/MyCourses/CourseInfo')
    },
]

export default myCourses