const Help = [
    {
        path: '/help',
        name: 'help',
        meta: {
            layout: 'main'
        },
        component: () => import('@/views/Help')
    },
    {
        path: '/system-use-condition',
        name: 'system-use-condition',
        meta: {
            layout: 'main'
        },
        component: () => import('@/views/Help/SystemUseConditions')
    },
    {
        path: '/instructions',
        name: 'instructions',
        meta: {
            layout: 'main'
        },
        component: () => import('../../../views/Help/Instructions.vue')
    }
]

export default Help;