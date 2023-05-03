<template>
    <footer>
        <section class="mt-[5rem] w-screen  bg-[#202054] text-white">
        
            <article class="md:pt-14 px-8 py-4 grid md:place-content-center md:place-items-center">
                <div class="md:px-33 md:w-[80%] grid-cols-2 grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-3 ">
                        <!-- ====ICON==== -->
                    <div class="md:-mt-[2rem] text-sm md:text-base md:col-span-2">
                        <img class="w-[5rem] aspect-square" :src="Logo" alt="Logo">
                        <p class="mb-7 md:my-[1rem] md:w-10/12">An organization that is focused on equipping African youths with the knowledge and skills needed in the tech space.</p>
                        <!-- ====SOCIAL ICONS=== -->
                        <div class="flex text-lg gap-5 md:gap-3 mb-[1rem] md:mt-[3rem]">
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            <font-awesome-icon icon="fa-brands fa-twitter" style="color: #f4f5f6;" />
                            <font-awesome-icon icon="fa-brands fa-instagram" style="color: #f4f5f6;" />
                        </div>
                    </div>
                    <!-- ====COMPANY==== -->
                    <div class=" mt-10 md:mt-0 text-sm md:text-base order-2 md:order-none">
                        <h3 class="md:mb-[3rem] font-bold text-base">COMPANY</h3>
                        <p class="py-[1rem]"><a href="/">About</a></p>
                        <p class="py-[1rem]"><a href="/">Blogs</a></p>
                        <p class="py-[1rem]"><a href="/">FAQs</a></p>
                        <p class="py-[1rem]"><a href="/">Join Our Community</a></p>
                        <p class="py-[1rem]"><a href="/">Partnership</a></p>
                    </div>
                    <div class="mt-10 md:mt-0 text-sm md:text-base order-1 md:order-none">
                        <h3 class="md:mb-[3rem] font-bold text-base ">SCHOOLS</h3>
                            <p class="py-[1rem]"><router-link to="/schools/product">School of Product</router-link></p>
                            <p class="py-[1rem]"><router-link to="/schools/data">School of Data</router-link></p>
                            <p class="py-[1rem]"><router-link to="/schools/engineering">School of Engineering</router-link></p>
                    </div>
                    <div class=" text-sm md:text-base order-3 md:order-none my-8 md:my-0">
                        <h3 class="md:mb-[3rem] font-bold text-base">CONTACT</h3>
                            <p class="py-[1rem]"><a href="/">axiaafrica@gmail.com</a></p>
                            <p class="py-[1rem]"><a href="/">09015558035</a></p>
                    </div>
                    <div class="md:hidden flex text-lg gap-5 md:gap-3 mb-[1rem] md:mt-[3rem] order-last md:order-none my-8 md:my-0">
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                                <font-awesome-icon icon="fa-brands fa-twitter" style="color: #f4f5f6;" />
                                <font-awesome-icon icon="fa-brands fa-instagram" style="color: #f4f5f6;" />
                            </div>
                </div>
                <!-- ============ -->
                <div class="md:px-33 md:w-[80%] mt-[5rem]">
                    <p class="grid place-content-center place-items-center">&copy; 2023 Axia Africa. All rights reserved.</p>
                </div>
            </article>
        </section>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Logo from '../../assets/Logo/logo-white-footer.svg'

</script>

<style lang="scss" scoped>

</style>