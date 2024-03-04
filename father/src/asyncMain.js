import Vue from 'vue';
import App from './App.vue';
import '@/styles/reset.css';

Vue.config.productionTip = false;

function addScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        document.body.appendChild(script);
    });
}

function init() {
    // 组件单文件获取组件函数
    Vue.component('Child1', window.child1.default);
    Vue.component('Child2', window.child2.default);

    // 组件合并后获取组件函数
    // Vue.component('Child1', window.main.default.child1);
    // Vue.component('Child2', window.main.default.child2);

    new Vue({
        render: (h) => h(App)
    }).$mount('#app');
}

Promise.all([
    addScript('./lib.child1.js'),
    addScript('./lib.child2.js')
]).then(init);
