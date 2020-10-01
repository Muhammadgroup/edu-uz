const News = [
    {
        path: '/news',
        name: 'news',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/News'),
    },
]

export default News