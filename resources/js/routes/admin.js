import Dashboard from '../components/admin/dashboard.vue';
import Units from '../components/admin/units.vue'
import Tenants from '../components/admin/tenants.vue';
import Payments from '../components/admin/payments.vue';
import Expenses from '../components/admin/expense.vue';
import Messages from '../components/admin/messages.vue';


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
    {
        path: '/admin/units',
        component: Units,
        name: 'Units',
    },
    {
        path: '/admin/tenants',
        component: Tenants,
        name: 'Tenants',
    },
    {
        path: '/admin/payments',
        component: Payments,
        name: 'Payments',
    },
    {
        path: '/admin/payments',
        component: Expenses,
        name: 'Expenses',
    },
     {
        path: '/admin/messages',
        component: Messages,
        name: 'Messages',
    },
]