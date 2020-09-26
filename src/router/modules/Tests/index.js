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
    }
]

export default Tests