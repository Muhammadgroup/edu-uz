const Auth = [
    {
        path: "/login",
        name: "Login",
        meta: {
            layout: "auth",
        },
        component: () => import("@/views/Auth/Login"),
    },
    {
        path: '/user-account',
        name: 'user-account',
        redirect: 'personal-settings',
        component: () => import('@/views/Auth/UserAccount'),
        children: [
            {
                path: '/personal-settings',
                name: 'personal-settings',
                component: () => import('@/views/Auth/UserAccount/PersonalSettings'),
                meta: {
                    layout: 'main'
                },
            },
            {
                path: '/change-password',
                name: 'change-password',
                component: () => import('@/views/Auth/UserAccount/ChangePassword'),
                meta: {
                    layout: 'main'
                },
            },
            {
                path: '/history-of-entries',
                name: 'history-of-entries',
                component: () => import('@/views/Auth/UserAccount/HistoryOfEntries'),
                meta: {
                    layout: 'main'
                },
            },
            {
                path: '/payment-history',
                name: 'payment-history',
                component: () => import('@/views/Auth/UserAccount/PaymentHistory'),
                meta: {
                    layout: 'main'
                },
            },
            {
                path: '/change-system-language',
                name: 'change-system-language',
                component: () => import('@/views/Auth/UserAccount/ChangeSystemLanguage'),
                meta: {
                    layout: 'main'
                },
            },
            {
                path: '/change-numbers',
                name: 'change-numbers',
                component: () => import('@/views/Auth/UserAccount/ChangeNumbers'),
                meta: {
                    layout: 'main'
                },
            }
        ]
    }
];

export default Auth;
