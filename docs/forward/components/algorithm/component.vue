<template>
    <div class=" w-full p-2 box-border flex-shrink-0">
        <div class="w-full  bg-slate-100 p-2">
            <slot></slot>
        </div>
        <p class="text-center py-1 font-bold">
            <slot name="title"></slot>
        </p>
    </div>
</template>

