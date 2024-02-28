import Vue from 'vue';
import App from './App.vue';
import '@/styles/reset.css';

Vue.config.productionTip = false;

// 组件单文件获取组件函数
Vue.component('Child1', window.child1.default);
Vue.component('Child2', window.child2.default);

// 组件合并后获取组件函数
// Vue.component('Child1', window.main.default.child1);
// Vue.component('Child2', window.main.default.child2);

new Vue({
    render: (h) => h(App)
}).$mount('#app');
