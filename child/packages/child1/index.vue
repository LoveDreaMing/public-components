<template>
    <div class="child1" @click="onHandleClick">{{ msg || 'child1' }}</div>
</template>

<script setup>
import { ref } from 'vue';

const a = ref(123);
console.log(a);


const props = defineProps({
    msg: String
});

const emits = defineEmits(['outClick']);

const onHandleClick = () => {
    emits('outClick');
};
</script>

<style scoped lang="scss">
.child1 {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: #fff;
}
</style>
