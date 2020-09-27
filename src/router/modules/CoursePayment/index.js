const CoursePayment = [
    {
        path: '/course-payment',
        name: 'course-payment',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/CoursePayment'),
    },
    {
        path: '/confirmation-payment',
        name: 'confirmation-payment',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/CoursePayment/ConfirmationPayment'),
    },
    {
        path: '/success-payment',
        name: 'success-payment',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/CoursePayment/SuccessPayment'),
    },
    {
        path: '/coupon-payment',
        name: 'coupon-payment',
        meta: {
            layout: "main"
        },
        component: () => import('@/views/CoursePayment/CouponPayment'),
    },
]

export default CoursePayment