<template>
    <section class="mt-[5rem] w-screen md:h-screen bg-[#202054] text-white">
        <article class="md:p-9 grid place-content-center place-items-center">
            <div class="grid md:grid-cols-2 md:px-33 w-[80%] mx-auto mt-[4rem] gap-9">
                <!-- ===TEXT=== -->
                <div>
                    <h2 class="font-bold md:text-4xl leading-relaxed">Confused about what to learn?</h2>
                    <p class="whitespace-prewrap my-9 text-sm md:text-base">Speak with our professional tech advisors to help kick start your tech journey and pilot you to being an expert in your desired field.</p>
                    <div class="group w-2/3 mx-auto md:inline-block">
                     <button class="border-[3px] text-center mx-auto border-white font-bold px-6 py-3 bg-[#202054] text-white group-hover:text-[#202054] group-hover:bg-white transition ease-in duration-300 white-shadow"> Speak with an Advisor
                      </button>
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