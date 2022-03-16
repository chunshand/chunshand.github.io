<template>
    <div style="height:32px"></div>
    <n-space vertical :size="24">
        <n-space v-for="item in classifyData">
            <n-space>
                <n-tag size="small" checkable>{{ item.title }}:</n-tag>
                <n-tag
                    v-for="value in item.list"
                    :key="value"
                    :checked="item.select == value"
                    @click="item.select = value"
                    size="small"
                    checkable
                    round
                >{{ value }}</n-tag>
            </n-space>
        </n-space>
        <n-input v-model.value="seachContent"></n-input>
        <n-list bordered>
            <n-list-item v-for="item in listDataComputed" :key="item.link">
                <n-space :align="'center'">
                    <n-a :href="item.link">{{ item.text }}</n-a>
                    <n-text>{{ item.desc }}</n-text>
                </n-space>
            </n-list-item>
        </n-list>
    </n-space>
</template>
<script lang="ts" setup>
/**
 * 列表组件
 */
import { NA, NText, NSpace, NTag, NInput, NList, NListItem } from 'naive-ui'
import { ref, reactive, computed } from "vue";

import { listDataItemInterface, typeDataInterface, typeDataClassifyItemInterface } from "./type.d"
const classify: typeDataClassifyItemInterface[] = [];
interface props {
    dataData: listDataItemInterface[],
    typeData: typeDataInterface
}

const $props = withDefaults(defineProps<props>(), {
    dataData: () => [],
    typeData: () => {
        return {
            classify: []
        }
    }
});
const classifyData = reactive($props.typeData.classify);
const seachContent = ref('')
const listData = ref<listDataItemInterface[]>($props.dataData);
const selectComputed = computed(() => {
    return classifyData.map((item) => {
        return item.select;
    })
});
const listDataComputed = computed(() => {
    return listData.value.filter((item: listDataItemInterface) => {
        let isType = item.type.filter((i) => {
            return selectComputed.value.map((t) => t.toLowerCase()).indexOf(i.toLowerCase()) > -1
        }).length == selectComputed.value.length;
        return isType;
    })
})
</script>