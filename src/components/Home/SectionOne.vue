<template>
  <section class="md:container px-4 mx-auto font-serif w-full md:pl-20 h-screen">
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
        <div class="grid md:grid-cols-2 gap-0 md:gap-2 mt-[2rem] ">
          <div class="group block w-[10%] md:w-full mx-auto ">
            <button
              class="border-2 w-[7rem] border-[#1d1e21] p-3 bg-white absolute z-10 text-[#1d1e21] group-hover:text-white group-hover:bg-[#1d1e21] transition ease-in duration-300"
            >
              Apply Now
            </button>
            <button
              class="md:p-3 md:ml-1 h-[3rem] md:h-[2.6rem] absolute ml-[0.4rem] mt-[0.55rem] md:mt-4 z-1 w-[7rem] bg-[#1d1e21] group-hover:bg-[#cb974d] transition ease-in duration-300"
            ></button>
          </div>
          <div class="md:ml-[2rem] block w-[30%] md:w-full mx-auto  mt-[5rem] md:mt-3 md:font-semi-bold">
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
