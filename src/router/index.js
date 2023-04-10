import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Contact from "@/views/Contact.vue";

const routes = [
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;