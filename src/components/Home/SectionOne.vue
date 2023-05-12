<template>
  <section class="md:container px-4 mx-auto font-serif w-full md:pl-20 md:h-screen">
    <article class="flex flex-col md:flex-row">
      <div class="w-full">
        <h2
          class="text-[1.7rem] text-center md:text-left md:text-[2rem] font-bold whitespace-prewrap  overflow-x-auto py-[2rem] break-before-column w-full leading-relaxed"
        >
          Accelerate your career with
          <span
            class="bg-gradient-to-r from-[#a7361e] to-[#cb974d] inline-block text-transparent bg-clip-text"
            >Job-ready</span
          >
          tech skills.
        </h2>
        <p class="leading-relaxed text-md text-center md:text-left">
          Begin your tech journey and expand your career opportunities in the tech space
          by learning tech skills in demand.
        </p>
        <div class="grid md:grid-cols-2 gap-0 mt-[2rem] ">
          <div class="group w-1/2 mx-auto md:inline-block">
                 <button class="border-[3px] text-center mx-auto border-[#000] px-6 py-3 bg-white text-[#000] group-hover:text-white group-hover:bg-[#202054] transition ease-in duration-300 blue-shadow"> Apply Now
                  </button>
            </div>
          <div class="block w-1/2 md:w-full mx-auto mt-6 md:mt-3 md:font-semi-bold">
            <a class="underline cursor-pointer" href="/">Speak with an advisor <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></a>
          </div>
        </div>
      </div>
      <!-- <div> -->
        <img
          class="object-fit md:w-[50%] aspect-square"
          :src="Axia"
          alt="a lady operating laptop"
        />
      <!-- </div> -->
    </article>
  </section>
</template>

<script setup>
import Axia from "../../assets/HomePageImg/axia_home.svg";
</script>

<style lang="scss" scoped></style>
