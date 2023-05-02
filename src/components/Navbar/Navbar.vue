<template>
     <nav class="fixed z-10 w-full center inset-x-0 bg-[#fffcf9] h-[5rem]">
     <div class="mt-2 px-3  md:px-32 mx-auto">
        <header class="md:w-full flex md:items-center md:justify-between">
                <!-- ====LOGO==== -->
            <div>
               <router-link to="/"><img class="w-1/2 aspect-square md:w-full " :src="Logo" alt="axia logo"></router-link> 
            </div>
            
                <!-- ====MENU=== -->
            <div class="hidden md:flex gap-2">
                <li>About</li>
                <li>Schools <span class="  mx-1">
                      <font-awesome-icon @mouseover="toggleSchool"  icon="fa-solid fa-circle-chevron-down"/>
                        <SchoolNav v-if="isSchool == true" @mouseleave="toggleSchool" ></SchoolNav>
                   
                  </span></li>
                <li>Join our Community</li>
                <li>Help
                 <span class="mx-1">
                    <font-awesome-icon @mouseover="toggleIcon"  icon="fa-solid fa-circle-chevron-down"/>
                      <HelpNav v-if="mobileMenu == true" @mouseleave="toggleIcon" ></HelpNav>
                   
                </span>
                 </li>
            </div>
              <!-- ====APPLY NOW=== -->
            <!-- <div class="hidden w-auto md:flex mr-[4rem] -mt-[3rem] group">
                <span class="border-2  border-[#1d1e21] w-[7rem] p-3 bg-white absolute z-10 text-[#1d1e21] group-hover:text-white group-hover:bg-[#1d1e21] transition ease-in duration-300"><a href="/">Apply Now</a></span>
                <span  class="p-3 ml-1 h-[2.7rem] w-[7rem] absolute mt-4 z-1 bg-[#1d1e21] group-hover:bg-[#cb974d] transition ease-in  duration-300">
                 
                </span>
            </div> -->

            <div class="hidden group md:inline-block ">
                        <button class="border-[3px] text-center mx-auto border-[#000] px-6 py-3 bg-white text-[#000] group-hover:text-white group-hover:bg-[#202054] transition ease-in duration-300 blue-shadow"> Apply Now
                        </button>
                    </div>

            <!-- =====HAMBURGER MENU==== -->
            <div class="md:hidden z-20 pr-3">
             <button @click.stop="toggleIcon" class="fixed right-3 top-3 mt-2" >
              <span class=""  v-if="mobileMenu === false"><font-awesome-icon icon="fa-solid fa-bars" /></span>
              <span class="top-50 left-50" id="closeMenu" v-else><font-awesome-icon icon="fa-solid fa-xmark" />
              </span>
                <!-- <div v-else></div> -->
             </button>
             <MobileView v-show="mobileMenu" @click.stop="!mobileMenu ? null : ''"/>
            </div>
        </header>
        </div>
    </nav>
</template>

<script setup>
import Logo from '../../assets/Logo/axia logo.svg'
import SchoolNav from '../../views/Schools/SchoolNav.vue'
import HelpNav from '../../views/Help/HelpNav.vue'
import MobileView from './MobileView.vue'
import {ref, onMounted} from 'vue'

const mobileMenu = ref(false)
const isSchool = ref(false)

const toggleSchool = () => {
    isSchool.value = !isSchool.value
    console.log(isSchool)
}
const toggleIcon = () => {
    mobileMenu.value = !mobileMenu.value
    console.log(mobileMenu)
}
const clickElement = () => {
    mobileMenu.value = false
    console.log('clicked')
}
onMounted(() => {
    document.addEventListener('click', (event) => {
        const element = event.target;
        const menu = document.querySelector('#closeMenu'); // Replace with a selector for the element that is toggled
        if (!menu.contains(element)) {
            mobileMenu.value = false;
        }
    });
    return { mobileMenu };
});

</script>

<style scoped>

</style>
