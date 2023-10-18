<script lang="ts" setup>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";
import { StarIcon } from "@heroicons/vue/24/solid";

const [container] = useKeenSlider({
    loop: true,
    rtl: true,
    mode: "free",
    slides: {
        perView: 2.5,
        spacing: 10,
    },
    breakpoints: {
        "(min-width: 768px)": {
            slides: {
                origin: "center",
                perView: 3.5,
                spacing: 50,
            },
        },
    },
});

const testimonials = [
    {
        avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        name: "John Doe",
        stars: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet odio sunt voluptatem, beatae voluptatibus, ab minima illo eius dolorem quis doloribus sed aliquid sint magnam asperiores ducimus, ut ipsa.",
    },
    {
        avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        name: "John Doe",
        stars: 3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet odio sunt voluptatem.",
    },
    {
        avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        name: "John Doe",
        stars: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        name: "John Doe",
        stars: 2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet odio sunt voluptatem, beatae voluptatibus, ab minima illo eius dolorem quis.",
    },
    {
        avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
        name: "John Doe",
        stars: 5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet odio sunt voluptatem, beatae voluptatibus.",
    },
];
</script>

<template>
    <section class="flex flex-col items-center justify-center gap-12 py-24">
        <h1
            class="text-3xl font-semibold leading-relaxed text-transparent uppercase bg-gradient-to-tr from-red-600 bg-clip-text to-red-400 lg:text-5xl"
        >
            Testimonials
        </h1>
        <div
            ref="container"
            class="relative keen-slider h-[40vh] md:h-[35vh] py-12"
        >
            <div
                class="z-50 absolute inset-0 h-[40vh] md:h-[35vh] from-15% to-85% bg-gradient-to-r from-black via-transparent to-black"
            ></div>
            <div
                v-for="(item, index) in testimonials"
                :key="index"
                class="flex items-center justify-center h-full p-[1px] bg-gradient-to-tr from-neutral-700 via-neutral-600 to-neutral-400 keen-slider__slide"
            >
                <div
                    class="flex flex-col items-center justify-start w-full h-full gap-3 p-6 bg-black"
                >
                    <div class="flex items-center justify-start w-full gap-3">
                        <img
                            class="object-cover object-center w-16 h-16 rounded-full"
                            :src="item.avatar"
                            alt="avatar"
                        />
                        <div
                            class="flex flex-col items-start justify-center h-full"
                        >
                            <h4>{{ item.name }}</h4>
                            <!-- show the starts -->
                            <div class="flex">
                                <StarIcon
                                    v-for="star in 5"
                                    :key="star"
                                    :class="`w-5 text-yellow-400 ${
                                        star <= item.stars
                                            ? 'opacity-100'
                                            : 'opacity-50'
                                    }`"
                                />
                            </div>
                        </div>
                    </div>
                    <p class="tex-xs md:text-lg text-neutral-400">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
