<template>
    <div class=" w-full h-32  flex justify-center items-center text-white bg-teal-200">
        <p>组件内容</p>
    </div>
    <br/>
    <teleport to="#app">
        <div class="w-32 h-32 text-center text-white  bg-yellow-400 fixed z-30 right-10 top-20">
           <p>浏览器浮动的 teleport 内容</p>
        </div>
    </teleport>
</template>