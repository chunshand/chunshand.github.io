<template>
    <div class=" w-fit mx-auto">
        <p class="p-4 font-bold">
            style: {{ style }}
        </p>
        <p class="p-4 font-bold">
            list length: 10000
        </p>
        <div class="virtual-scroll-list">
            <div :style="style">
                <div class="list-item" v-for="i in renderList" :key="i.key" :style="{ height: '80px' }">
                    <p>virtual-scroll-item {{ i.key + 1 }}</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
// 丐版 固定高实现 虚拟滚动列表
import { onMounted } from 'vue'
import { useVirtualScrollLis } from "./virtual-scroll.js"
const list: Record<string, number>[] = [];
for (let i = 0; i < 10000; i++) {
    list.push({ key: i });
}
const { style, renderList } = useVirtualScrollLis({
    height: 80,
    pageSize: 5,
    dom: ".virtual-scroll-list",
    list: list
});
onMounted(() => {
    console.log('mounted!')
})
</script>
<style scoped>
.virtual-scroll-list {
    height: 400px !important;
    width: 300px;
    box-sizing: border-box;
    display: block;
    background-color: bisque;
    box-sizing: border-box;
    overflow-y: scroll;
}

.list-item {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
