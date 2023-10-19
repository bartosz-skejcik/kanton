// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
                },
            ],
        },
    },
    modules: ["@vueuse/motion/nuxt"],
});
