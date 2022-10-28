<template>
    <div class=" w-full  bg-slate-100 p-1 box-border mt-10">
        <div class=" mx-auto   box-border">
            <!-- 1 -->
            <div class="w-full h-96 overflow-hidden rounded-lg relative mb-4">
                <div class="w-full h-full flex  absolute top-0 " :class="{ 'demo1': demo1 }"
                    :style="{ 'left': -1 * demo1_active * 100 + '%' }">
                    <img class="w-full h-full flex-shrink-0" :src="i" v-for="(i, index) in listC" :key="index">
                </div>
            </div>
            <!-- 2 -->
            <div class="w-full h-96 overflow-hidden rounded-lg relative mb-4">
                <div class="w-full h-full absolute overflow-hidden top-0 left-0 " :class="{ 'demo2': i.bool }"
                    v-for="(i, index) in demo2List" :key="index" :style="{
                        'z-index': i.index,
                        'clip-path': 'inset(0px ' + i.left + '% 0px ' + i.right + '%)'
                    }">
                    <img class="w-full h-full flex-shrink-0" :src="i.src">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue"
const list = ref([
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
    "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"

]);
const demo1_active = ref(0);
const demo1 = ref(true);

const listC = computed(() => {
    let _list = JSON.parse(JSON.stringify(list.value));
    _list.push(list.value[0]);
    return _list;
})

const handleDemo1 = () => {

    setInterval(() => {
        console.log("demo1");
        demo1.value = true;
        if (demo1_active.value < listC.value.length - 1) {
            demo1_active.value++
        } else {
            demo1.value = false;
            demo1_active.value = 0
        }
    }, 3000)
}

const demo2_active = ref(0);

const demo2List = computed(() => {
    let _list = JSON.parse(JSON.stringify(list.value));
    _list.push(list.value[0]);

    return _list.map((item: any, index: number) => {
        return {
            src: item,
            left: 0,
            right: 0,
            index: _list.length - index,
            bool: true
        }
    });
})
const handleDemo2 = () => {
    const f = 'left';
    setInterval(() => {
        console.log("demo2");
        demo2List.value[demo2_active.value].bool = true;
        if (demo2_active.value < demo2List.value.length - 1) {
            demo2List.value[demo2_active.value][f] = 100;
            demo2_active.value++

        } else {
            console.log(demo2_active.value);
            demo2_active.value = 0
            demo2List.value.forEach((item: any) => {
                item[f] = 0;
                item.bool = false;
            });
        }

    }, 3000)
}
onMounted(() => {
    handleDemo2();
    handleDemo1();
})
</script>

<style lang="scss" scoped>
.demo1 {
    transition: all 3s ease;
}

.demo2 {
    transition: all 3s ease;
}
</style>