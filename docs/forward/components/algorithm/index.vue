<template>
    <p class=" text-center text-sm py-1 text-gray-400">简单动画展示算法流程</p>
    <div class="flex flex-col w-full  box-border p-4 flex-wrap min-w-min">
        <ItemComponent v-for="(item, index) in list" :key="index">
            <component :is="handleGetComponent(item.component)" />
            <template v-slot:title>{{ item.title }}</template>
        </ItemComponent>
    </div>
</template>

<script lang="ts" setup>
import ItemComponent from "./component.vue"

import bubbling from "./components/bubbling.vue"
import quickSort from "./components/quick-sort.vue"
import selectSort from "./components/select-sort.vue"
import { ref } from "vue"
interface ListInterface {
    title: string,
    component: string
}
const list = ref<ListInterface[]>([
    {
        title: "冒泡排序",
        component: "bubbling",
    },
    {
        title: "快速排序",
        component: "quickSort",
    },
    {
        title: "选择排序",
        component: "selectSort",
    }
])
const components: Record<string, Object> = { bubbling, quickSort, selectSort }
const handleGetComponent = (name: string) => {
    return components[name];
}
</script>