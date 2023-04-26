<template>
    <section class="mt-[5rem] w-screen h-screen bg-[#202054] text-white">
        <article class="md:p-9 grid place-content-center place-items-center">
            <div class="grid md:grid-cols-2 md:px-33 w-[80%] mx-auto mt-[4rem] gap-9">
                <!-- ===TEXT=== -->
                <div>
                    <h2 class="font-bold md:text-4xl leading-relaxed">Confused about what to learn?</h2>
                    <p class="whitespace-prewrap my-9 text-xs">Speak with our professional tech advisors to help kick start your tech journey and pilot you to being an expert in your desired field.</p>
                    <div class="group my-[3rem]">
                        <button
                        class="border-2 w-auto border-white p-3 bg-[#202054] absolute z-10 text-white group-hover:text-[#202054] group-hover:bg-white transition ease-in duration-300"
                        >
                        Speak with an Advisor
                        </button>
                        <button
                        class="p-3 ml-1 h-[2.6rem] absolute mt-4 z-1 w-[11.7rem] bg-white group-hover:bg-[#cb974d] transition ease-in duration-300"
                        ></button>
                    </div>
                </div>
                <!-- ===IMAGE=== -->
                <div class="my-[4rem]">
                    <img :src="Advisor" alt="advisor">
                </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import Advisor from "../../assets/HomePageImg/advisor.svg";

</script>

<style lang="scss" scoped>

</style>