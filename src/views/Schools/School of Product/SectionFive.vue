<template>
    <section class="bg-white w-screen  text-[#000]">
        <article class="md:p-9 grid md:place-content-center md:place-items-center">
            <div class=" md:px-33 md:w-[80%] px-5 mx-auto my-[4rem]">
                <!-- =====HEADING==== -->
                <div class="grid md:grid-cols-2 my-[3rem]">
                    <h2 class="font-bold text-3xl -mt-4">Get Onboard with us</h2>
                    <div></div>
                </div>
                <!-- =====BODY==== -->
                <div class="grid md:grid-cols-2 gap-[3.4rem] ">
                    <!-- ======IMAGE====== -->
                    <div class="order-last md:order-none">
                        <img :src="Onboard" alt="Onboarding">
                    </div>
                    <!-- ======TEXT====== -->
                    <div class="md:w-[90%] w-full md:ml-auto order-first md:order-none">
                        <!-- ====QUOTE===== -->
                        <div class="mb-[3rem] text-2xl md:text-4xl">
                            <font-awesome-icon icon="fa-solid fa-quote-left" size="2xl" color="#000" />
                        </div>
                        <p class="mb-[2rem] text-xs md:text-[0.9rem] leading-relaxed">Axia Africa is an organization that is focused on equipping
                            African youths with the knowledge and digital skills needed today Our aim is to make tech
                            knowledge accessible to every individual irrespective of age, literacy, and location.</p>
                        <p class="text-xs md:text-[0.9rem] leading-relaxed">We are looking forward to building a strong community of ready-to-work
                            personnel and employable candidates around the world in the tech space.</p>
                    </div>
                </div>
                <!-- ===SECOND CONTENT==== -->
                <div class="my-[3rem]">
                    
                    <p class="py-[3rem] text-xs md:text-[0.9rem] leading-relaxed">We at Axia Africa are intentional about our students and focused
                        about building a community. The tech space in Africa is fast growing and we have the necessary
                        programmes to help launch you into that space. We sharpen your skills to give you leverage in your
                        career while navigating the job market</p>
                </div>
            </div>

        </article>
    </section>
</template>

<script setup>
import Onboard from "../../../assets/HomePageImg/onboard.svg";
</script>

<style lang="scss" scoped></style>