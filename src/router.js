import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App';
import Login from './components/Pages/Login';
import Menu from './components/Pages/Menu';
import CurrentWarehouseInquiry from './components/Pages/MenuContent/CurrentWarehouseInquiry';
import TestPages from './components/Pages/MenuContent/TestPages';
import ReceiptPaymentInquiry from './components/Pages/MenuContent/ReceiptPaymentInquiry';
const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu,
        children: [
            {
                // todo テストページ
                path: '/menu/testPages',
                name: 'testPages',
                component: TestPages,
            },
            {
                path: '/menu/currentWarehouseInquiry',
                name: 'currentWarehouseInquiry',
                component: CurrentWarehouseInquiry,
            },
            {
                path: '/menu/receiptPaymentInquiry',
                name: 'receiptPaymentInquiry',
                component: ReceiptPaymentInquiry,
            },
        ],
    },
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
