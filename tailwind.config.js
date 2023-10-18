/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            boxShadow: {
                sharp: "12px 12px 0px 0px rgba(66, 68, 90, 1);",
            },
        },
    },
    plugins: [],
};
