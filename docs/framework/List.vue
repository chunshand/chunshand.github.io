<template>
    <div style="height:32px"></div>
    <n-space vertical :size="24">
        <n-space>
            <n-space>
                <n-tag checkable>工具:</n-tag>
                <n-tag
                    v-for="item in buildTypeList"
                    :key="item"
                    :checked="buildType == item"
                    @click="buildType = item"
                    checkable
                    round
                >{{ item }}</n-tag>
            </n-space>
        </n-space>
        <n-space>
            <n-space>
                <n-tag checkable>功能:</n-tag>
                <n-tag
                    v-for="item in functionTypeList"
                    :key="item"
                    :checked="functionType == item"
                    @click="functionType = item"
                    checkable
                    round
                >{{ item }}</n-tag>
            </n-space>
        </n-space>
        <n-input v-model.value="seachContent"></n-input>

        <n-list bordered>
            <n-list-item v-for="item in listDataComputed" :key="item.key">
                <n-space :align="'center'">
                    <n-a :href="item.link">{{ item.text }}</n-a>
                    <n-text>{{ item.desc }}</n-text>
                </n-space>
            </n-list-item>
        </n-list>
    </n-space>
</template>
<script lang="ts" setup>
import { NA, NP, NText, NSpace, NTag, NInput, NList, NListItem } from 'naive-ui'
import { ref, computed } from "vue";
import data from "./data.json";

const seachContent = ref('')

const buildTypeList = ref([
    "All",
    "Webpack",
    "Vite",
    "Vue-Cli",
])
const buildType = ref('All');

const functionTypeList = ref([
    "All",
    "多页面",
    "优化",
    "按需加载",
])

const functionType = ref('All');
const listData = ref<any[]>(data);
const listDataComputed = computed(() => {
    return listData.value.filter(() => {
        return true;
    })
})
</script>