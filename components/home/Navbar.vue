<script lang="ts" setup>
const links = [
    {
        href: "/",
        text: "Home",
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
    },
    {
        class: "bx bxl-facebook",
        href: "https://www.facebook.com/kuba.kanton",
    },
    {
        class: "bx bxl-gmail",
        href: "mailto:kanton.kuba@gmail.com",
    },
];
</script>

<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 flex items-center justify-around w-full px-4 py-5 md:px-12 bg-white/5"
    >
        <h6 class="text-xl font-black leading-snug">JAKUB KANTON</h6>
        <div class="hidden gap-8 md:flex">
            <NuxtLink
                v-for="(link, index) in links"
                :key="index"
                class="font-medium text-white uppercase transition-colors duration-200 ease-in-out hover:text-neutral-500"
                :to="link.href"
            >
                {{ link.text }}
            </NuxtLink>
        </div>
        <div class="hidden gap-8 md:flex">
            <NuxtLink
                v-for="(social, index) in socials"
                :key="index"
                class="text-white transition-colors duration-200 ease-in-out hover:text-neutral-500"
                :to="social.href"
            >
                <i :class="social.class"></i>
            </NuxtLink>
        </div>
    </nav>
</template>
