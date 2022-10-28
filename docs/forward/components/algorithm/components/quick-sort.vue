<template>
    <div class="w-full  text-center">
        <transition-group>
            <div class=" w-10 h-8 border-slate-300 border  text-center leading-8 bg-white list-complete-item"
                :class="{ ' bg-blue-900 text-white': activeArr.includes(index), ' bg-red-900 text-white': activepivot.includes(index) }"
                v-for=" (i, index) in list" :key="i">
                {{ i }}
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const list = ref<number[]>([10, 3, 15, 9, 11, 3, 90, 1]);
const activeArr = ref<number[]>([-1, -1]);
const activepivot = ref<number[]>([-1, -1]);


const timeSleep = (t: number = 3000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, t)
    })
}
const handleInit = () => {
    list.value = [10, 3, 15, 9, 11, 3, 90, 1];
    handleStart()
}
const handleStart = async () => {
    await handleBubbling()
    handleInit();
}
const swap = (arr: number[], i: number, j: number) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const quickSort = async (arr: number[], left: number | null, right: number | null) => {
    return new Promise(async (resolve) => {

        let partitonIndex = 0
        left = typeof left !== 'number' ? 0 : left
        right = typeof right !== 'number' ? arr.length - 1 : right

        if (left < right) {
            let pivot = left //基准点
            activepivot.value = [pivot];
            let index = pivot + 1 //数组第位二开始比较
            for (let i = index; i <= right; i++) {
                activeArr.value = [i];
                await timeSleep()
                if (arr[i] < arr[pivot]) { //如果当前小于基准点的值
                    activeArr.value = [i, index];
                    await timeSleep()
                    swap(arr, i, index) //互换位置
                    index++
                }
            }
            await timeSleep()
            activeArr.value = [pivot, index - 1];
            await timeSleep()
            swap(arr, pivot, index - 1)

            //中间索引
            partitonIndex = index - 1
            //左侧快排
            await quickSort(arr, left, partitonIndex - 1)
            //右侧快排
            await quickSort(arr, partitonIndex + 1, right)
        }

        resolve(null)
    })

}
const handleBubbling = () => {
    return new Promise(async (resolve) => {
        await quickSort(list.value, null, null)
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