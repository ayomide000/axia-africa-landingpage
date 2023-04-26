<template>
    <section class="bg-[#141414] w-screen  text-white">
        <article class="p-9 grid place-content-center place-items-center">
            <div class=" px-33 w-[80%] mx-auto my-[4rem]">
                    <!-- =====HEADING==== -->
                    <div class="grid grid-cols-2 my-[3rem]">
                        <h2 class="font-bold text-3xl -mt-4">Foster your tech knowledge</h2>
                        <div></div>
                    </div>
                    <!-- ====IMAGE==== -->
                    <div>
                     <img :src="Foster" alt="learning">
                    </div>
                    <p class="my-[2rem] w-[60%]">Don’t just wait around, Register and join our students ready to enroll and kick start their tech career.</p>
                    <div class="group my-[2rem]">
                            <button
                            class="border-[3px] w-[8rem] border-white p-3 bg-[#141414] absolute z-10 text-white group-hover:text-[#202054] group-hover:bg-white transition ease-in duration-300"
                            >
                            Apply Now
                            </button>
                            <button
                            class="p-3 ml-1 h-[2.6rem] absolute mt-4 z-1 w-[8rem] bg-white group-hover:bg-[#cb974d] transition ease-in duration-300"
                            ></button>
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