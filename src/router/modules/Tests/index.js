const Tests = [
    {
        path: '/test',
        name: 'test',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Tests'),
    },
    {
        path: '/test-show',
        name: 'testShow',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Tests/show'),
    },
    {

        path: '/lider-board',
        name: 'liderBoard',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Tests/LiderBoard')
    },
    {

        path: '/course-start',
        name: 'course-start',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Tests/CourseStart')
    },
    {

        path: '/test-result',
        name: 'test-result',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Tests/TestResult')
    }
]

export default Tests