import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Contact from "@/views/Contact.vue";
import Album from "@/views/Album.vue";

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
    {
        path: "/album",
        name: "Portofolio",
        component: Album,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;