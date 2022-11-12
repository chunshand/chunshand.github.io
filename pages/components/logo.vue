<template>
    <div class="logo-list">
        <img :src="logo[name]" :alt="name" :title="name" v-for="name in $props.data" :key="name">
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const logo = {
    Vue: "https://vuejs.org/logo.svg",
    Node: "https://nodejs.org/static/images/favicons/favicon.ico",
    React: "https://react.docschina.org/favicon.ico",
    Nuxt: 'https://www.nuxtjs.org.cn/logo.svg',
    NestJS: 'https://www.nestjs.com.cn/img/logo.png',
    PHP: "https://www.php.net/favicon.ico",
    ViteJS: "https://vitejs.cn/logo.svg",
    webpack: "https://webpack.js.org/favicon.f326220248556af65f41.ico",
    "uni-app": "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-dc-site/9a952c80-6080-11eb-a16f-5b3e54966275.png",
    "three.js": "https://threejs.org/files/favicon.ico",
    flutter: "https://flutter.cn/assets/images/cn/flutter-icon.png",
    Go: "https://golang.google.cn/favicon.ico",
    ES6: 'https://es6.ruanyifeng.com/favicon.ico',

}
const $props = defineProps<{ data: any[] }>()
onMounted(() => {
    console.log('mounted!')
})
</script>
<style scoped>
.logo-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding:24px;
    box-sizing: border-box;
}

.logo-list img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
