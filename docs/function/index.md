<script setup>
    // 引入
import List from '../List.vue'
import dataData from "./data.json";
import typeData from "./type.json"
</script>

# 功能库

::: info

方便找到合适的轮子，方便开发，早点下班

可前往 <a href="https://github.com/chunshand/chunshand.github.io/issues" target="_bank">Github Issues</a> 添加

:::
<List :dataData="dataData" :typeData="typeData"/>
