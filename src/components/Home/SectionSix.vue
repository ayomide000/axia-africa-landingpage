<template>
    <section class="bg-[#141414] w-screen  text-white">
        <article class="md:p-9 grid md:place-content-center md:place-items-center">
            <div class=" md:px-33 md:w-[80%] w-full px-5 mx-auto my-[4rem]">
                    <!-- =====HEADING==== -->
                    <div class="grid md:grid-cols-2 my-[3rem]">
                        <h2 class="font-bold text-3xl -mt-4">Foster your tech knowledge</h2>
                        <div></div>
                    </div>
                    <!-- ====IMAGE==== -->
                    <div>
                     <img :src="Foster" alt="learning">
                    </div>
                    <p class="my-[2rem] md:w-[60%] text-sm md:text-base">Don’t just wait around, Register and join our students ready to enroll and kick start their tech career.</p>
    
                     <div class="hidden group md:inline-block">
                         <button class="border-[3px] text-center my-7 mx-auto border-white font-bold px-6 py-3 bg-[#141414]  text-white group-hover:text-[#202054] group-hover:bg-white transition ease-in duration-300 white-shadow"> Apply Now
                          </button>
                    </div>
            </div>
        </article>
    </section>
</template>

<script setup>
import Foster from "../../assets/HomePageImg/foster.png";

</script>

<style lang="scss" scoped>

</style>