<template>
    <div class="w-full  bg-slate-50 p-10">
        <div class="w-96 h-96 bg-slate-200 mx-auto overflow-auto">
            <ImageComponent v-for="i in 20" :key="i" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ImageComponent from "./image.vue"
</script>

