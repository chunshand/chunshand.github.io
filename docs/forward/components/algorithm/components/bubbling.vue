<template>
    <div class="w-full  text-center">
        <transition-group>
            <div class=" w-10 h-8 border-slate-300 border  text-center leading-8 bg-white list-complete-item"
                :class="{ ' bg-blue-900 text-white': activeArr.includes(index) }" v-for=" (i, index) in list" :key="i">
                {{ i }}
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const list = ref<number[]>([50, 20, 34, 4, 11, 3, 90, 10]);
const activeArr = ref<number[]>([-1, -1]);
const timeSleep = (t: number = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, t)
    })
}
const handleInit = () => {
    list.value = [50, 20, 34, 4, 11, 3, 90, 10];
    console.log(list.value);
    handleStart()
}
const handleStart = async () => {
    await handleBubbling()
    handleInit();
}
const handleBubbling = () => {
    return new Promise(async (resolve) => {
        var len = list.value.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                activeArr.value = [j, j + 1];
                await timeSleep();

                if (list.value[j + 1] < list.value[j]) {
                    let middle = list.value[j + 1];
                    list.value[j + 1] = list.value[j];
                    list.value[j] = middle;
                }
                await timeSleep();

            }
        }
        resolve(null);
    })


}
onMounted(() => {
    handleStart();

})
</script>
<style scoped>
.list-complete-item {
    transition: all 1s ease;
    display: inline-block;
    margin-right: 10px;

}

/* .list-complete-enter-from,
.list-complete-leave-to {
    opacity: 0;
    /* transform: translateY(30px); */
/* } */

/* .list-complete-leave-active {
    position: absolute;
    transform: translateY(30px);

} */
</style>