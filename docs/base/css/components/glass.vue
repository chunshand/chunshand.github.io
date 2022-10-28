<script lang="ts" setup>
import { ref, onMounted } from "vue"
const rotate = ref(0);
const handleR = () => {
    rotate.value += 2
    requestAnimationFrame(handleR)
}
onMounted(() => {
    handleR()
})
</script>
<template>
    <!-- 1 -->
    <div class=" glass-main-1">
        <div class="relative w-full  h-80 p-10">
            <div class=" w-96 h-60 absolute center-container  drop-shadow">
                <div class="glass">
                </div>
            </div>

        </div>
    </div>
    <!-- 2 -->
    <div class="  glass-main-2">
        <div class="mx-auto relative w-full  h-80 ">
            <div class=" w-full h-80 absolute center-container drop-shadow">
                <div class="glass">
                </div>
            </div>

        </div>
    </div>
    <!-- 3 -->
    <div class=" glass-main-3">
        <div class="fangzi" :style="{ 'transform': 'rotateZ(' + rotate + 'deg)' }">
            <div class="dimian"></div>
            <div class="houqiang"></div>
            <div class="leftqiang"></div>
        </div>

    </div>
    <!-- 4 -->
    <div class="glass-main-4" v-if="false">
        <div class="body relative">
            <div class="shuizhu"></div>
        </div>
    </div>
    <!-- 5 -->
    <div class="glass-main-5" v-if="false">
        <div class="body">
            <div class="body-clip" v-for="i in 5" :key="i"
                :style="{ 'clip-path': 'inset(' + i * 50 + 'px 0px ' + (300 - i * 50 - 20) + 'px 0px)' }">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.glass-main-1 {
    background-color: #f1707d;
    margin-top: 48px;
    margin-bottom: 48px;

    .drop-shadow {
        filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.5));
    }

    .glass {
        width: 100%;
        height: 100%;
        filter: blur(2px);
        background-color: #f1707d;
    }
}

.glass-main-2 {
    margin-bottom: 48px;
    background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
    background-repeat: no-repeat;
    background-position: center;

    .drop-shadow {
        filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.5));
    }

    .glass {
        filter: blur(2px);
        background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
        background-size: cover;
        background-position: center;
        clip-path: inset(40px 25% 40px 25%);
        display: block;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
}

.glass-main-3 {

    margin-bottom: 48px;
    background-color: #f1707d;
    padding: 100px 20px;

    .fangzi {
        width: 600px;
        height: 400px;
        margin: 0 auto;
        perspective: 1000px;
        perspective-origin: 50% 50%;

        .dimian {
            margin: 100px auto;
            position: absolute;
            top: 50%;
            left: 40%;
            width: 300px;
            height: 200px;
            background-color: rgba(255, 255, 255, 0.1);
            filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.5));
            transform: rotateX(90deg) translateX(-50%) translateY(-50%);
            border: 2px solid rgba(0, 0, 0, 0.5);

        }


        .houqiang {
            margin: 100px auto;
            position: absolute;
            top: 50%;
            left: 40%;
            width: 300px;
            height: 200px;
            background-color: rgba(255, 255, 255, 0.1);
            filter: drop-shadow(10px -10px 10px rgba(0, 0, 0, 0.5));
            border: 2px solid rgba(0, 0, 0, 0.5);
            transform: rotateX(0deg) translateX(-50%) translateY(-50%) translateZ(-200px);
        }

        .leftqiang {
            margin: 100px auto;
            position: absolute;
            top: 50%;
            left: 40%;
            width: 200px;
            height: 200px;
            background-color: rgba(255, 255, 255, 0.1);
            transform: rotateY(90deg) translateX(50%) translateY(-50%) translateZ(-250px);
            background-color: #f2707d;
            // filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.5));
            border: 2px solid rgba(0, 0, 0, 0.5);
            box-sizing: border-box;
        }
    }



}

.glass-main-4 {
    background-color: #f2707d;
    margin-bottom: 48px;

    .body {
        width: 100%;
        height: 400px;
        display: block;
    }

    .shuizhu {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* 测试用的边框 */
        /* border: 1px solid; */
        box-sizing: border-box;
        /* 设置弯曲 */
        // 前四个值是水平圆角半径 后四个是垂直半径
        border-radius: 30% 70% 70% 30% / 30% 35% 65% 70%;
        /* 设置box-shadow :水平方向阴影  垂直方向阴影  模糊距离  阴影尺寸  阴影颜色  内/外阴影(inset/outset(默认)) 
            盒子阴影可以有多组值,之间用逗号隔开
            水平阴影和垂直阴影必须写,其余4个是可选的*/
        box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.5) inset,
            10px 10px 20px rgba(0, 0, 0, 0.3),
            15px 15px 30px rgba(0, 0, 0, 0.05),
            -10px -10px 15px rgba(255, 255, 254, 0.83) inset;
        /*使用关键帧  watermove  9s播放  匀速 无限循环*/
        animation: watermove 4s linear infinite;
    }

    @keyframes watermove {
        20% {
            border-radius: 30% 70% 53% 47% / 28% 44% 56% 72%;


        }

        40% {
            border-radius: 30% 70% 39% 61% / 34% 39% 61% 66%;
        }

        60% {
            border-radius: 25% 75% 45% 55% / 40% 55% 45% 60%;
        }

        80% {
            border-radius: 28% 72% 31% 69% / 32% 39% 61% 68%;
        }
    }

}

.glass-main-5 {

    margin-bottom: 48px;

    .body {
        margin: 0 auto;
        width: 500px;
        height: 300px;
        background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
        background-repeat: no-repeat;
        background-position: center;
        position: relative;

        .body-clip {
            width: 500px;
            height: 300px;
            position: absolute;
            top: 0;
            background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
            background-repeat: no-repeat;
            background-position: center;
            animation: clipanimation 2s linear infinite;

        }

        @keyframes clipanimation {
            0% {
                transform: rotateX(0deg) translateY(10px);
                opacity: 0;
            }

            20% {
                transform: rotateX(0deg) translateY(10px);
                opacity: 0;

            }

            39% {
                transform: rotateX(0deg) translateY(10px);
                opacity: 0;

            }

            40% {
                transform: rotateX(10deg) rotateZ(2deg) translateY(10px) translateX(10px);
                opacity: 1;

            }

            41% {
                transform: rotateX(0deg) translateY(10px);
                opacity: 0;

            }

            59% {
                transform: rotateX(0deg) translateY(10px);
                opacity: 0;

            }

            60% {
                transform: rotateX(10deg) rotateZ(2deg) translateX(-10px);
                opacity: 1;

            }

            61% {
                transform: rotateX(0deg) translateY(10px);
                opacity: 0;

            }

            80% {
                transform: rotateX(0deg) translateY(0px);
                opacity: 0;

            }

            100% {
                transform: rotateX(0deg) translateY(0px);
                opacity: 0;

            }
        }
    }
}

.w-full {
    width: 100%;
}

.w-96 {
    width: 240px;
}

.h-80 {
    height: 320px;
}

.w-05 {
    width: 50%;
}

.h-60 {
    height: 240px;
}

.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.center-container {
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
}

.p-10 {
    padding: 80px;
}
</style>

