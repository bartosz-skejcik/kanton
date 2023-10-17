<script lang="ts" setup>
import { ArrowDownTrayIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <section
        id="ebook"
        class="h-[80vh] w-screen flex items-center justify-center overflow-hidden"
    >
        <div
            class="flex flex-col items-center justify-center w-5/6 lg:h-3/4 lg:flex-row lg:w-1/2 bg-neutral-900"
        >
            <img
                src="~/public/images/ebook.jpg"
                class="h-[110%] rounded-none"
                alt=""
            />
            <div
                class="flex-col items-start justify-center w-full px-3 space-y-5 lg:px-6"
            >
                <h5 class="text-sm font-semibold uppercase text-neutral-500">
                    Download my free ebook
                </h5>
                <h1 class="text-5xl font-bold text-red-500">$99.99</h1>
                <div class="pb-3 pl-3 space-y-2">
                    <h2 class="pb-1 -ml-3 text-3xl font-semibold">
                        HIPERTROFIA
                    </h2>
                    <p class="text-neutral-400">
                        Full of professionalism, approach to the client at the
                        highest position – I have never met with such interest
                        and expense, individual approach and attention to
                        another person.
                    </p>
                    <p class="font-semibold">About this book:</p>
                    <ul class="pl-2">
                        <li>• something goes here</li>
                        <li>• Another thing goes right here</li>
                        <li>• And lastly something over there</li>
                    </ul>
                </div>
                <button
                    class="flex items-center justify-center gap-3 px-6 py-2 text-lg font-semibold transition-all duration-300 bg-red-500 md:text-xl md:px-7 hover:bg-red-600"
                >
                    Download
                    <ArrowDownTrayIcon
                        class="w-5 text-white md:w-6 aspect-square"
                    />
                </button>
            </div>
        </div>
    </section>
</template>
