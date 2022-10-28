<template>
    <div class=" bg-yellow-100 w-full h-24 flex justify-center items-center rounded-sm mt-2">
        <div class="px-4 py-2 bg-blue-500 text-white rounded-md text-sm cursor-pointer" @click="handleShare">
            点击分享
        </div>
    </div>
</template>
<script lang="ts" setup>
const handleShare = () => {
    // interface ShareData {
    //     files?: File[];
    //     text?: string;
    //     title?: string;
    //     url?: string;
    // }
    if ("share" in navigator) {
        navigator.share({
            text: "不卷行不行啊",
            url: "https://chunshand.github.io/",
            title: "不要卷了-测试shareapi",
            files: []
        })
    } else {
        alert("浏览器不支持share api");
    }
}
</script>