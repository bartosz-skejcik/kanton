<script lang="ts" setup>
import { ArrowUpRightIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <header
        class="flex items-center justify-center w-screen min-h-screen overflow-hidden bg-fixed bg-black bg-center bg-no-repeat bg-cover md:bg-contain"
        style="background-image: url('images/hero.png')"
    >
        <div
            class="flex flex-col items-center justify-center w-screen h-screen gap-8 bg-black/40"
        >
            <h1
                class="text-3xl text-center w-fit md:w-1/2 md:text-5xl lg:text-8xl customfont"
            >
                TO BE THE BEST YOU HAVE TO LEARN FROM THE BEST
            </h1>
            <button
                class="flex items-center justify-center gap-3 px-6 py-2 text-lg font-medium transition-all duration-300 bg-red-500 md:py-3 md:text-xl md:px-10 hover:bg-red-600"
            >
                Learn more
                <ArrowUpRightIcon class="w-5 text-white md:w-6 aspect-square" />
            </button>
        </div>
    </header>
</template>
