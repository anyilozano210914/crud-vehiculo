const routes = [
    { path: '/', name:'home', component: () => import('../components/home') },
    { path: '/CreateCar', name: 'Car', component: () => import('../components/CreateCar') },
    { path: '/editCar/:id', name: 'product', component: () => import('../components/EditCar') },
];

export default routes;  