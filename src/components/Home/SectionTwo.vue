<template>
    <section class=" my-[5rem] md:px-33 md:w-[80%] mx-auto w-full px-4  font-serif">
        <!-- <article class="w-full max-w-[1000px]"> -->
            <header class="grid md:grid-cols-2">
                <div>
                    <h1 class="font-semibold text-2xl md:text-3xl my-[2rem] w-full leading-loose">Courses for you</h1>
                    <p class="leading-relaxed">Here are some courses from our schools that we offer.</p>
                    <p>Enroll and kickstart your tech career.</p>
                </div>
                <div class="hidden md:block"></div>
            </header>
            <!-- ====CARDS===== -->
            <div class="my-[4rem] md:grid grid-cols-3 gap-6 w-full">
                <!-- ====PRODUCT DESIGN==== -->
                <!-- ====FOR BORDER ==== -->
                <div class="p-3 mr-5 border-2 border-r-0 border-slate-900 mb-5">
                    <!-- =====MAIN CARD ==== -->
                    <div class="bg-[#faf5ee] -mt-5">
                        <img :src="ProducDesign" alt="product design">
                        <div class="px-3 my-5">
                            <h3 class="font-semibold text-xl mb-3">Product Design</h3>
                            <p class="mb-4 font-thin">Design user experiences for products in today’s digital world. Build a portfolio that showcases your ability to transform products.</p>
                            <div>
                                <a href="/">Enrol Now</a>
                                <span class="px-3"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ====DATA ANALYTICS==== -->
                <div class="p-3 mr-5 border-2 border-r-0 border-slate-900 mb-5"> 
                <!-- ====FOR BORDER ==== -->
                    <div class="bg-[#faf5ee] -mt-5">
                    <!-- =====MAIN CARD ==== -->
                        <img :src="DataAnalytics" alt="data analytics">
                            <div class="px-3 my-5">
                                <h3 class="font-semibold text-xl mb-3">Data Analytics</h3>
                                <p class="mb-4 font-thin">Use Python, SQL, and statistics to uncover insights, communicate critical findings, and create data-driven solutions</p>
                                <div>
                                    <a href="/">Enrol Now</a>
                                    <span class="px-3"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /></span>
                                </div>
                            </div>
                    </div>
                </div>
                <!-- ====FRONTEND DEVELOPMENT==== -->
                <div class="p-3 mr-5 border-2 border-r-0 border-slate-900 mb-5">
                <!-- ====FOR BORDER ==== -->
                    <div class="bg-[#faf5ee] -mt-5">
                    <!-- =====MAIN CARD ==== -->
                        <img :src="FrontendDevelopment" alt="frontend development">
                            <div class="px-3 my-5">
                                <h3 class="font-semibold text-xl mb-3 whitespace-nowrap pr-2">Front-End Development</h3>
                                <p class="mb-4 font-thin">Begin our front-end development program structured to help students launch a new career in web development.</p>
                                <div class="flex">
                                    <a href="/">Enrol Now</a>
                                    <span class="px-3"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /></span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        <!-- </article> -->
    </section>
</template>

<script setup>
import ProducDesign from "../../assets/HomePageImg/coursesForYou/productDesign.png";
import DataAnalytics from "../../assets/HomePageImg/coursesForYou/dataAnalytics.png";
import FrontendDevelopment from "../../assets/HomePageImg/coursesForYou/frontend.png";

</script>

<style lang="scss" scoped>

</style>