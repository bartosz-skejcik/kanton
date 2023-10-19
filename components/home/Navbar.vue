<script lang="ts" setup>
const links = [
    {
        href: "#ebook",
        text: "E-book",
    },
    {
        href: "#about",
        text: "About",
    },
    {
        href: "#testimonials",
        text: "Testimonials",
    },
    {
        href: "#contact",
        text: "Contact",
    },
];

const socials = [
    {
        class: "bx bxl-instagram",
        href: "https://www.instagram.com/kantonkuba_/",
        color: "hover:bg-gradient-to-r hover:from-[#FEDA75] hover:to-[#FA7E1E]",
    },
    {
        class: "bx bxl-facebook",
        href: "https://www.facebook.com/kuba.kanton",
        color: "hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500",
    },
    {
        class: "bx bxl-gmail",
        href: "mailto:kanton.kuba@gmail.com",
        color: "hover:bg-gradient-to-r hover:from-[#EA4335] hover:to-[#D93025]",
    },
];
</script>

<template>
    <nav
        class="fixed top-0 left-0 right-0 z-[999999] flex items-center justify-around w-full px-4 py-4 backdrop-filter backdrop-blur-lg md:px-12 bg-black/10 lg:bg-white/5"
    >
        <NuxtLink
            to="/"
            class="-mt-1 text-lg font-black leading-snug md:text-xl md:mt-0"
        >
            KUBA KANTON
        </NuxtLink>
        <div class="hidden gap-8 md:flex">
            <NuxtLink
                v-for="(link, index) in links"
                :key="index"
                class="text-sm font-semibold text-white uppercase transition-colors duration-200 ease-in-out hover:text-neutral-500"
                :to="link.href"
            >
                {{ link.text }}
            </NuxtLink>
        </div>
        <div class="flex gap-3 md:gap-8">
            <NuxtLink
                v-for="(social, index) in socials"
                :key="index"
                target="_blank"
                :class="`bg-white text-transparent bg-clip-text transition-all duration-200 text-xl hover:scale-105 ease-in-out ${social.color}`"
                :to="social.href"
            >
                <i :class="social.class"></i>
            </NuxtLink>
        </div>
        <button class="flex items-center justify-center md:hidden">
            <i class="-mt-1 text-2xl text-white bx bx-menu"></i>
        </button>
    </nav>
</template>
