<template>
    <div style="padding-top: 10px">
        <div v-for="yearList in data_plus">
            <div class="year">
                {{ yearList[0].frontMatter.date.split('-')[0] }} 年
            </div>
            <template v-for="(article, index) in yearList" :key="index">
                <div class="month" v-if="article.month">
                    {{ article.month }} 月
                </div>
                <a :href="withBase(article.regularPath)" class="article">
                    <div class="titleDiv">
                        <div class="title-o"></div>
                        {{ article.frontMatter.title }}
                    </div>
                    <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
                </a>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../functions'

const { theme } = useData()
const data = computed(() => useYearSort(theme.value.posts))
const data_plus = computed(() => {
    let _data = [];
    for (let j in data.value) {
        let value = data.value[j];
        let len = value.length;
        let _item_data = [];
        for (let i = 0; i < len; i++) {
            let item = JSON.parse(JSON.stringify(value[i]));
            // 年
            let y = item.frontMatter.date.split('-')[0];
            // 月
            let m = item.frontMatter.date.split('-')[1];
            if (i == 0) {
                item.month = m;
            }
            if (i > 0) {
                let _item = value[i - 1];
                // 年
                let _y = _item.frontMatter.date.split('-')[0];
                // 月
                let _m = _item.frontMatter.date.split('-')[1];
                if (y + m != _y + _m) {
                    item.month = m;
                }
            }
            _item_data.push(item);
        }
        _data.push(_item_data);
    }

    return _data;
})
</script>

<style scoped>
.year {
    padding: 16px 0 8px 0;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: var(--date-font-family);
}

.month {
    padding: 16px 0 8px 16px;
    font-size: 1rem;
    font-weight: 600;
    font-family: var(--date-font-family);
}
</style>
