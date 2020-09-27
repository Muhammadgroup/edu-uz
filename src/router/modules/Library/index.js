const Library = [
    {
        path: '/library',
        name: 'library',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Library'),
    },
    {
        path: '/show',
        name: 'show-library',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Library/show'),
    },
]

export default Library