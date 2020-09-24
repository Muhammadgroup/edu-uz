const myCourses = [
    {
        path: '/my-courses',
        name: 'my-courses',
        meta: {
            layout: 'main'
        },
        component: () => import('@/views/MyCourses')
    }
]

export default myCourses