import { createWebHistory, createRouter } from "vue-router";
import Reseptilista from "@/components/reseptilista";
import Reseptisivu from "@/components/reseptisivu";

const routes = [
    {
        path: "/",
        name: "Reseptilista",
        component: Reseptilista
    },
    {
        path: "/reseptisivu/:id",
        name: "Reseptisivu",
        component: Reseptisivu
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;