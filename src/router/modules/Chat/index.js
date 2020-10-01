const Chat = [
    {
        path: '/chat',
        name: 'chat',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/Chat'),
        children: [
            {
                path: ':id',
                name: 'chatID',
                meta: {
                    layout: 'main'
                },
                component: () => import('@/views/Chat/components/UserChatArea')
            }
        ]
    },
]

export default Chat