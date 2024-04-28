<template>
    <div id="app">
        <Child1 :msg="'子组件1'" @outClick="inClick1" />
        <Child2 :msg="'子组件2'" @outClick="inClick2" />
    </div>
</template>

<script setup>
import Child1 from '@/packages/child1';
import Child2 from '@/packages/child2';

const inClick1 = () => {
    console.log('点击组件111');
};

const inClick2 = () => {
    console.log('点击组件2');
};
</script>
