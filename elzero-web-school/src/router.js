import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Adjust the path as needed
import About from './views/About.vue'; // Adjust the path as needed
import Help from './views/Help.vue';
import Blog from './views/Blog.vue';
import Service from './views/Service.vue';
import Service1 from './views/Services/Service1.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/help',
        name: 'help',
        component: Help,

    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/services',
        name: 'service',
        component: Service,
    },
    {
        path: '/service1',
        name: 'service1',
        component: Service1,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;