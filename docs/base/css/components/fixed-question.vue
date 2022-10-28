<template>
    <div class="fixed-question">
        <div class="no-transform-container" :class="{ 'transform-container': bool }">
            <p>父元素:{{ !bool ? 'no-transform' : 'transform' }}</p>
            <div class="fixed-container">
                <p class=" text-white">浏览器定位 top:0 left:0</p>
            </div>
        </div>
        <div class="btns" @click="bool = !bool">
            点击此处
        </div>
    

    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
const bool = ref(false);
</script>

<style scoped>
.fixed-question {
    width: 100%;
    height: 320px;
    border-radius: 8px;
    margin-top: 48px;
}

.no-transform-container {

    width: 240px;
    height: 240px;
    margin-top: 48px;
    background-color: #03a9f422;
}

.transform-container {
    transform: scale(1);
}

.fixed-container {
    width: 120px;
    height: 120px;
    background-color: #00000022;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    color: white;
}

.btns {
    width: 80px;
    height: 40px;
    background-color: #03a9f4;
    line-height: 40px;
    border-radius: 16px;
    text-align: center;
    color: white;
    margin-top: 16px;
    cursor: pointer;
    user-select: none;
}
</style>