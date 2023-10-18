<script lang="ts" setup></script>

<template>
    <section
        id="about"
        class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row-reverse max-w-7xl"
    >
        <div
            class="relative w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0"
        >
            <img
                style="aspect-ratio: 3/4"
                class="object-cover object-center w-full shadow-sharp shadow-neutral-900"
                alt="hero"
                src="~/public/images/about.png"
            />
        </div>
        <div
            class="flex flex-col items-center gap-3 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:items-start md:text-left"
        >
            <h6 class="font-semibold text-left text-red-500 uppercase">
                about me
            </h6>
            <h2 class="mb-4 text-2xl font-bold title-font sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p class="mb-8 text-lg leading-relaxed text-neutral-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                eveniet odio sunt voluptatem, beatae voluptatibus, ab minima
                illo eius dolorem quis doloribus sed aliquid sint magnam
                asperiores ducimus, ut ipsa. <br /><br />Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Repellendus odit cupiditate
                ipsa, quia pariatur molestiae porro nihil rerum. Impedit commodi
                laboriosam suscipit earum sunt esse porro excepturi accusamus
                aut laudantium?
            </p>
        </div>
    </section>
</template>
