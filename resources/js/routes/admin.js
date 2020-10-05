import Dashboard from '../components/admin/dashboard.vue';


export default [
    {
        path:'/admin',
        redirect:'/admin/dashboard'
    },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        name: 'Dashboard',
    },
]