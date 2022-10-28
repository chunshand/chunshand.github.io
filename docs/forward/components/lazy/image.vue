<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const status = ref('none')
const container = ref();
const handleInit = () => {
    let observer = new IntersectionObserver((e: IntersectionObserverEntry[]) => {
        e.forEach(function (entry) {
            if (status.value == 'end') {
                return
            }
            if (entry.intersectionRatio == 0) {
                return
            }
            status.value = 'loading';
            setTimeout(() => {
                status.value = 'end';
            }, 1000);
            // observer.unobserve(entry.target);
        });

    }, { threshold: [1] });
    console.log(container.value);
    observer.observe(container.value);
}
onMounted(async () => {
    handleInit()
})
</script>

<template>
    <div class="w-full h-32 p-2 mb-4">
        <div class="w-full h-full bg-stone-500 rounded-lg flex justify-center items-center" ref="container">
            <p class="text-gray-50 text-center " v-if="status == 'none'">未加载</p>
            <p class=" text-yellow-100 text-center " v-else-if="status == 'loading'">加载中</p>
            <p class=" text-green-200 text-center " v-else-if="status == 'end'">加载完成</p>
        </div>
    </div>
</template>