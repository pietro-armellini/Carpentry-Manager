import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path: "/",
        alias: "/activities",
        name: "activities",
        component: () => import("./components/TutorialsList")
    },
    {
        path: "/activities/:id",
        name: "activity-details",
        component: () => import("./components/Tutorial")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddTutorial")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;