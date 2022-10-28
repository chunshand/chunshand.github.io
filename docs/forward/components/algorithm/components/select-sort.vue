<template>
    <div class="w-full  text-center">
        <transition-group>
            <div class=" w-10 h-8 border-slate-300 border  text-center leading-8 bg-white list-complete-item"
                :class="{ ' bg-blue-900 text-white': activeArr.includes(index), ' bg-red-900 text-white': activepivot.includes(index) }"
                v-for=" (i, index) in list" :key="i.key">
                {{ i.value }}
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const NumArr = [10, 3, 15, 9, 11, 3, 90, 1];
const ObjArr = NumArr.map((item) => {
    return {
        key: String(Math.random() * 1000),
        value: item
    }
})
interface ItemInterface {
    key: string, value: number
}

const list = ref<ItemInterface[]>(ObjArr);
const activeArr = ref<number[]>([-1, -1]);
const activepivot = ref<number[]>([-1, -1]);


const timeSleep = (t: number = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, t)
    })
}
const handleInit = () => {
    list.value = ObjArr;
    handleStart()
}
const handleStart = async () => {
    await handleSelectSort()
    handleInit();
}
const swap = (arr: ItemInterface[], i: number, j: number) => {
    console.log(i, j);
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const handleSelectSort = () => {
   return  new Promise(async (resolve) => {
        let length = list.value.length;
        let index = 0;
        for (let j = 0; j < length; j++) {
            let _index = index;
            activepivot.value = [index];
            for (let i = index; i < length; i++) {
                activeArr.value = [i, index]
                await timeSleep(300)
                if (list.value[i].value < list.value[_index].value) {
                    activepivot.value = [index, i];
                    await timeSleep()
                    _index = i;
                }
            }
            swap(list.value, index, _index);
            index++;
            await timeSleep()

        }
        resolve(null)

    })
}
onMounted(() => {
    handleStart();

})
</script>
<style scoped>
.list-complete-item {
    transition: all 0.8s ease;
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