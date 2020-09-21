const Auth = [
    {
        path: "/login",
        name: "Login",
        meta: {
            layout: "auth",
        },
        component: () => import("@/views/Auth/Login"),
    },
];

export default Auth;
