<template>
    <div id="app">
        <component :is="child1" :msg="'局部子组件1'" @outClick="inClick1"></component>
        <component :is="child2" :msg="'局部子组件2'" @outClick="inClick2"></component>
        <Child1 :msg="'全局子组件1'" @outClick="inClick1" />
        <Child2 :msg="'全局子组件2'" @outClick="inClick2" />
    </div>
</template>

<script setup>
import { computed } from 'vue';

// 组件单文件获取组件函数
const child1 = computed(() => window.child1.default);
const child2 = computed(() => window.child2.default);

// 组件合并后获取组件函数
// const child1 = computed(() => window.main.default.child1);
// const child2 = computed(() => window.main.default.child2);

const inClick1 = () => {
    console.log('点击了子组件1');
};

const inClick2 = () => {
    console.log('点击了子组件2');
};
</script>
