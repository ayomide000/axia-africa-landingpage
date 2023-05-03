<template>
    <section class="w-full px-5 md:px-32 font-serif">
        <h1 class="text-3xl md:text-4xl md:py-[2rem] md:my-[4rem]  text-center font-bold w-full md:w-1/2 mx-auto">School of
            <span
                class="bg-gradient-to-r from-[#a7361e] to-[#cb974d] inline-block text-transparent bg-clip-text">Engineering</span>
        </h1>
        <p class="text-center text-sm md:text-base md:px-32 leading-relaxed my-[2rem]">Begin your learning process in Front-End Web Development, Back-End Web Development and more. Discover career opportunities available for you. Speak to professionals and read through the materials and the programme designed specifically for you.</p>
        <!-- AVATAR -->
        <div class="w-1/2 mx-auto pb-[4rem]">
            <div class="flex justify-center">
                <img :src="AVI" alt="students pictures">
                <p class="ml-3 text-center mt-3">500+ Active Students</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import AVI from '../../../assets/School/Product/avatars.school.svg';

</script>

<style lang="scss" scoped></style>