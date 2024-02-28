<template>
    <div class="child2" @click="onHandleClick">{{ msg || 'child2' }}</div>
</template>

<script setup>
const props = defineProps({
    msg: String
});

const emits = defineEmits(['outClick']);
const onHandleClick = () => {
    emits('outClick');
};
</script>

<style scoped lang="scss">
.child2 {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    color: #fff;
}
</style>