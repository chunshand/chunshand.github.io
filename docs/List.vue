<template>
    <div style="height:32px"></div>
    <n-space vertical :size="24">
        <n-space v-for="(item, index)  in classifyData" :key="index">
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
        <n-input v-model:value="seachContent" placeholder="输入需要搜索的内容" clearable></n-input>
        <n-list bordered>
            <n-list-item v-for="item in listDataComputed" :key="item.link">
                <n-space :align="'center'">
                    <n-a :href="item.link" target="_blank">{{ item.text }}</n-a>
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
// const classify: typeDataClassifyItemInterface[] = [];
interface props {
    dataData: listDataItemInterface[],
    typeData: typeDataInterface
}
const props = withDefaults(defineProps<props>(), {
    dataData: () => [],
    typeData: () => {
        return {
            classify: []
        }
    }
});
const classifyData = ref<typeDataClassifyItemInterface[]>(props.typeData.classify);
// const classifyData = $props.typeData.classify;
const seachContent = ref<string>('')
const listData = ref<listDataItemInterface[]>(props.dataData);
const selectComputed = computed(() => {
    return classifyData.value.map((item) => {
        return item.select;
    })
});
const listDataComputed = computed((): listDataItemInterface[] => {
    return listData.value.filter((item: listDataItemInterface) => {
        let typeStr = (item.type.join('') + item.text + item.desc).toLowerCase();
        if (seachContent.value.length > 0) {
            return typeStr.indexOf(seachContent.value.toLowerCase()) > -1;
        } else {
            let isType: boolean = item.type.filter((i) => {
                return selectComputed.value.map((t) => t.toLowerCase()).indexOf(i.toLowerCase()) > -1
            }).length == selectComputed.value.length;
            return isType
        }
    })
})
</script>