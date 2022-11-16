<template>
    <div class="canvas" ref="canvas">
    </div>
</template>
<script lang='ts' setup>
import * as THREE from "three"
import { ref, onMounted, nextTick } from "vue"
const canvas = ref();

const handleInit = () => {
    // 宽
    let innerWidth = canvas.value.offsetWidth;
    // 高
    let innerHeight = canvas.value.offsetHeight;
    // 场景
    const scene = new THREE.Scene();
    // 设置场景为白色
    scene.background = new THREE.Color('#ffffff');
    // 摄像机
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 1;
    // 渲染器
    const renderer = new THREE.WebGLRenderer();
    // 设置渲染器大小
    renderer.setSize(innerWidth, innerHeight);

    // 创建一个盒子模型数据
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // 设置盒子的材质 MeshBasicMaterial材质不受光照
    const material = new THREE.MeshBasicMaterial({ color: 0x03a9f4 });
    // 组成一个盒子的网络
    const cube = new THREE.Mesh(geometry, material);
    // 场景加入盒子网络，默认为 场景世界的 (0,0,0) 坐标
    scene.add(cube);



    // renderer.domElement 实际是 canvas dom 对象
    canvas.value.appendChild(renderer.domElement)

    function animate() {
        // 下一帧执行
        requestAnimationFrame(animate);
        // 为了更能直观的看出 立体的盒子 让盒子在每一帧的 围绕z x 轴旋转度数增加
        cube.rotation.z += 0.01;
        cube.rotation.x += 0.01;
        // 渲染器渲染场景
        renderer.render(scene, camera);
    }
    animate();
}
onMounted(() => {
    nextTick(() => {
        handleInit();
    })
})
</script>
<style>
.canvas {
    width: 100%;
    height: 600px;
    border-radius: 8px;
    border: 1px solid #ddd;
    overflow: hidden;
}
</style>
