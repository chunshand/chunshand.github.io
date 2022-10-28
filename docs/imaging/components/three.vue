<script lang="ts" setup>

import {
    Scene,
    DoubleSide,
    PerspectiveCamera,
    WebGLRenderer,
    Mesh,
    BoxGeometry,
    PlaneGeometry,

    MeshPhysicalMaterial,

    AmbientLight,
    DirectionalLight,
    Color,
    PCFSoftShadowMap,
    SpotLight,
    SpotLightHelper,
    AxesHelper,
    GridHelper,
    QuadraticBezierCurve,
    QuadraticBezierCurve3,
    Vector2,
    Vector3,
    BufferGeometry,
    LineBasicMaterial,
    Line,

} from "three"

// import { OrbitControls } from "three/examples/js/controls/OrbitControls"
import { OrbitControls } from '@three-ts/orbit-controls';
import { ref, onMounted } from "vue";

const canvas = ref();
const handleInit = () => {
    const scene = new Scene();
    scene.background = new Color("#f1707d")
    let innerWidth = canvas.value.offsetWidth;
    let innerHeight = canvas.value.offsetHeight;
    innerHeight = 600
    const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    camera.position.z = 10;
    camera.position.y = 5;

    // 渲染器
    const renderer = new WebGLRenderer();

    // 环境光
    const light = new AmbientLight(0x404040, 0.5); // soft white light
    scene.add(light);


    // 平行光(太阳)
    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // 聚光
    const spotLight = new SpotLight(0x03a9f4, 2, 100, Math.PI / 8);
    spotLight.position.set(5, 5, 5);
    const helper = new SpotLightHelper(spotLight, 1);
    scene.add(spotLight);
    scene.add(helper);

    // 盒子
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshPhysicalMaterial({ color: 0xf1707d });
    const cube = new Mesh(geometry, material);

    cube.position.y = 1;
    scene.add(cube);

    // 平面
    const plane_geometry = new PlaneGeometry(10, 10);
    const plane_material = new MeshPhysicalMaterial({ color: 0xf1707d, side: DoubleSide });
    const plane = new Mesh(plane_geometry, plane_material);
    plane.rotation.x = -0.5 * Math.PI
    scene.add(plane);
    // 中心坐标
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);
    // 网格
    const size = 10;
    const divisions = 10;
    const gridHelper = new GridHelper(size, divisions);
    scene.add(gridHelper);



    // 二位二次贝塞尔曲线
    const curve = new QuadraticBezierCurve3(
        new Vector3(-10, 0, 0),
        new Vector3(20, 15, 0),
        new Vector3(10, 0, 0)
    );

    const points = curve.getPoints(60);
    const _geometry = new BufferGeometry().setFromPoints(points);

    const _material = new LineBasicMaterial({ color: 0xffffff });

    const curveObject = new Line(_geometry, _material);
    scene.add(curveObject);







    // 摄像机控制器交互 可鼠标拖动 滚轮交互
    const controls = new OrbitControls(camera, renderer.domElement)

    renderer.setSize(innerWidth, innerHeight);
    canvas.value.appendChild(renderer.domElement)
    function animate() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        controls.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}
onMounted(() => {
    handleInit();
})
</script>
<template>
    <div ref="canvas" class="canvas">
    </div>
</template>

<style scoped>
.canvas{
    border-radius: 8px;
    overflow: hidden;
    margin-top: 48px;
}
</style>