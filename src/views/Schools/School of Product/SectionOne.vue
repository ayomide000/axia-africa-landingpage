<template>
    <section class="w-full px-32 font-serif">
        <h1 class="text-4xl py-[2rem] my-[4rem]  text-center font-bold w-1/2 mx-auto">School of <span class="bg-gradient-to-r from-[#a7361e] to-[#cb974d] inline-block text-transparent bg-clip-text">Product</span></h1>
        <p class="text-center px-32 leading-relaxed my-[2rem]">We offer you product courses such as Product Design and Product management by equipping you with the right materials, courses and professionals willing to coach you through your journey while giving you the best advices after your program.</p>
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

<style lang="scss" scoped>

</style>