<template>
  <section class="md:container px-4 mx-auto font-serif w-full md:pl-20 h-screen">
    <article class="flex flex-col md:flex-row">
      <div class="w-full">
        <h2
          class="text-xl md:text-[2rem] font-bold whitespace-pre-wrap py-[2rem] break-before-column w-full leading-relaxed"
        >
          Accelerate your career with
          <span
            class="bg-gradient-to-r from-[#a7361e] to-[#cb974d] inline-block text-transparent bg-clip-text"
            >Job-ready</span
          >
          tech skills.
        </h2>
        <p class="leading-relaxed text-xs">
          Begin your tech journey and expand your career opportunities in the tech space
          by learning tech skills in demand.
        </p>
        <div class="grid grid-cols-2 gap-0 md:gap-2 mt-5 ">
          <div class="group">
            <button
              class="border-2 w-[7rem] border-[#1d1e21] p-3 bg-white absolute z-10 text-[#1d1e21] group-hover:text-white group-hover:bg-[#1d1e21] transition ease-in duration-300"
            >
              Apply Now
            </button>
            <button
              class="p-3 ml-1 h-[2.6rem] absolute mt-4 z-1 w-[7rem] bg-[#1d1e21] group-hover:bg-[#cb974d] transition ease-in duration-300"
            ></button>
          </div>
          <div class="md:ml-[2rem] mt-3 md:font-semi-bold">
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
