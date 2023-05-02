<template>
    <div class="absolute z-0 mt-[8rem] bg-white w-screen h-screen">
        <SectionOne />
        <SectionTwoVue/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSeven/>
        <Footer/>
    </div>
</template>

<script setup>
import SectionOne from './SectionOne.vue';
import SectionTwoVue from './SectionTwo.vue';
import SectionThree from './SectionThree.vue';
import SectionFour from './SectionFour.vue';
import SectionFive from './SectionFive.vue';
import SectionSeven from '../../../components/Home/SectionSeven.vue';
import Footer from '../../../components/Footer/Footer.vue'
</script>

<style lang="scss" scoped>

</style>