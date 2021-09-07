import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Register from "../views/Register.vue";
import Account from "../views/Account.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home | Fulk"
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "About| Fulk"
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Register| Fulk"
        }
    },
    {
        path: "/Account",
        name: "Account",
        component: Account,
        meta: {
            title: "Account| Fulk"
        }
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router;