<script lang="ts" setup>
import { ArrowUpRightIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <header
        class="flex items-center justify-center w-screen min-h-screen bg-black bg-center bg-no-repeat md:bg-bottom bg-fit"
        style="background-image: url('./images/hero.png')"
    >
        <div
            class="flex flex-col items-center justify-center w-full h-full gap-8 bg-black/40"
        >
            <h1 class="text-center w-fit md:w-1/2 text-8xl customfont">
                TO BE THE BEST YOU HAVE TO LEARN FROM THE BEST
            </h1>
            <button
                class="flex items-center justify-center gap-3 px-10 py-3 text-xl font-medium transition-all duration-300 bg-red-600 hover:shadow-sharp hover:shadow-red-500"
            >
                Learn more
                <ArrowUpRightIcon class="w-6 h-6 text-white" />
            </button>
        </div>
    </header>
</template>
