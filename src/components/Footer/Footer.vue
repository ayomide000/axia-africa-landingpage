<template>
    <footer>
        <section class="mt-[5rem] w-screen h-screen bg-[#202054] text-white">
        
            <article class="p-9 grid place-content-center place-items-center">
                <div class="px-33 w-[80%] grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-3">
                        <!-- ====ICON==== -->
                    <div class="-mt-[2rem]">
                        <img class="w-[5rem] aspect-square" :src="Logo" alt="Logo">
                        <p class=" my-[1rem]">An organization that is focused on equipping African youths with the knowledge and skills needed in the tech space.</p>
                        <!-- ====SOCIAL ICONS=== -->
                        <div class="flex gap-3 mt-[3rem]">
                            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            <font-awesome-icon icon="fa-brands fa-twitter" style="color: #f4f5f6;" />
                            <font-awesome-icon icon="fa-brands fa-instagram" style="color: #f4f5f6;" />
                        </div>
                    </div>
                    <!-- ====COMPANY==== -->
                    <div>
                        <h3 class="mb-[3rem]">COMPANY</h3>
                        <p class="py-[1rem]"><a href="/">About</a></p>
                        <p class="py-[1rem]"><a href="/">Blogs</a></p>
                        <p class="py-[1rem]"><a href="/">FAQs</a></p>
                        <p class="py-[1rem]"><a href="/">Join Our Community</a></p>
                        <p class="py-[1rem]"><a href="/">Partnership</a></p>
                    </div>
                    <div>
                        <h3 class="mb-[3rem]">SCHOOLS</h3>
                            <p class="py-[1rem]"><a href="/">School of Product</a></p>
                            <p class="py-[1rem]"><a href="/">School of Data</a></p>
                            <p class="py-[1rem]"><a href="/">School of Engineering</a></p>
                    </div>
                    <div>
                        <h3 class="mb-[3rem]">CONTACT</h3>
                            <p class="py-[1rem]"><a href="/">axiaafrica@gmail.com</a></p>
                            <p class="py-[1rem]"><a href="/">09015558035</a></p>
                    </div>
                </div>
                <!-- ============ -->
                <div class="px-33 w-[80%] mt-[5rem]">
                    <p class="grid place-content-center place-items-center">&copy; 2023 Axia Africa. All rights reserved.</p>
                </div>
            </article>
        </section>
    </footer>
</template>

<script setup>
import Logo from '../../assets/Logo/logo-white-footer.svg'

</script>

<style lang="scss" scoped>

</style>