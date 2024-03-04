<template>
    <div id="app">
        <AsyncChild1 :msg="'异步子组件1'" @outClick="inClick1" />
        <AsyncChild2 :msg="'异步子组件2'" @outClick="inClick2" />
        <div>其他内容</div>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const AsyncChild1 = defineAsyncComponent(() => {
    return new Promise((resolve) => {
        resolve(window.child111?.default);
    });
});

const AsyncChild2 = defineAsyncComponent(() => {
    return new Promise((resolve) => {
        resolve(window.child2?.default);
    });
});

const inClick1 = () => {
    console.log('点击了子组件1');
};

const inClick2 = () => {
    console.log('点击了子组件2');
};
</script>
