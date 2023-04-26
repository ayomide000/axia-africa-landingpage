<template>
     <nav class="fixed z-10 w-full center inset-x-0 bg-[#fffcf9] h-[5rem] p-3 ">
     <div class="container px-33 mx-auto">
        <header class=" w-[60%] md:w-full flex items-center justify-between">
            <div>
               <img :src="Logo" alt="axia logo">
            </div>
            <div class="flex gap-2">
                <li>About</li>
                <li>Schools <font-awesome-icon icon="fa-solid fa-circle-chevron-down" /></li>
                <li>Join our Community</li>
                <li>Help <font-awesome-icon icon="fa-solid fa-circle-chevron-down" /></li>
            </div>
            <div class="w-auto flex mr-[4rem] -mt-[3rem] group">
                <span class="border-2  border-[#1d1e21] w-[7rem] p-3 bg-white absolute z-10 text-[#1d1e21] group-hover:text-white group-hover:bg-[#1d1e21] transition ease-in duration-300"><a href="/">Apply Now</a></span>
                <span class="p-3 ml-1 h-[2.7rem] w-[7rem] absolute mt-4 z-1 bg-[#1d1e21] group-hover:bg-[#cb974d] transition ease-in  duration-300"></span>
            </div>
        </header>
        </div>
    </nav>
</template>

<script setup>
import Logo from '../../assets/Logo/axia logo.svg'

</script>

<style scoped>

</style>
