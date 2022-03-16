<script setup>
    // 引入
import List from '../List.vue'
import dataData from "./data.json";
import typeData from "./type.json"
</script>



# 功能库
<List :dataData="dataData" :typeData="typeData"/>
