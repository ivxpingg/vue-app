// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/style/icon.css';
import './common/style/base.scss';
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';

Vue.use(VueResource);
Vue.use(VueRouter);

let router = new VueRouter({
    linkActiveClass: 'active',
    routes: [{
        path: '/goods',
        component: goods
    }, {
        path: '/seller',
        component: seller
    }, {
        path: '/ratings',
        component: ratings
    }]
})
/* eslint-disable no-new */
new Vue({
    data: function () {
        return {
           title: '我是标题1'
        };
    },
    router: router,
    render: h => h(App)
}).$mount('#app');
