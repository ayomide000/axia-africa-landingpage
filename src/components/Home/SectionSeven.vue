<template>
    <section class="w-screen bg-[#fffcf9] px-3">
        <!-- ===HEADING==== -->
        <header class=" md:px-33 md:w-[80%] mx-auto my-[2rem]">
            <h2 class="font-bold text-3xl">Our success story</h2>
            <p>What our students are saying about their learning experience.</p>
        </header>
        <!-- ====ANIMATION CARDS==== -->
        <div class="my-[4rem] grid md:grid-cols-3 gap-5">
            <!-- ====CARD ONE==== -->
            <div class="bg-[#faf5ee] px-3 pt-5">
                <p class="mb-[2rem] text-[0.8rem]">I had no clue where to start in learning Product design, then Axia Africa started an online training and I joined. Within few weeks of coaching I was able to understand both UX & UI. The classes are interesting and gives room to ask questions. Materials provided were helpful. It was a great to learning experience led by the fantastic teachers. I would highly recommend this training if you are a beginner</p>
                <div class="flex items-center gap-3 mt-[4rem]">
                <img :src="Person1" alt="person_one">
                <h3>Blessing Fabilola</h3>
                </div>
            </div>
            <!-- ====CARD TWO==== -->
            <div class="bg-[#faf5ee] px-3 pt-5">
                <p class="mb-[2rem] text-[0.8rem]">Axia Africa’s product design class has been an eye opener and a good starter for me as someone who is a graphic designer but struggles a lot with UX in particular. I’ve become more confident in my UX process and prowess as a designer and I won’t stop learning!. Thank you Axia.</p>
                <div class="flex items-center gap-3 mt-[7rem]">
                <img :src="Person2" alt="person_two">
                <h3>Samuel Osunleke</h3>
                </div>
            </div>
            <!-- ====CARD THREE==== -->
            <div class="bg-[#faf5ee] px-3 pt-5">
                <p class="mb-[2rem] text-[0.8rem]">Axia Africa has been so helpful to me. I got into tech with zero knowledge of it, didn’t even know my way around a good system. But right now, I know more than I would’ve imagined that I can before I got into the academy. Very helpful, kind, patient and thoughtful teachers too. This training has really helped me! I highly recommend it! Thank youuu.</p>
                <div class="flex items-center gap-3 mt-[4rem]">
                <img :src="Person3" alt="person_three">
                <h3>Oyinlola Babalola</h3>
                </div>
            </div>
            <!-- ====CARD FOUR==== -->
            <div class="bg-[#faf5ee] px-3 pt-5">
                <p class="mb-[2rem] text-[0.8rem]">Being someone with the passion to learn design, I found it hard to multitask between my days job and my passion for learning. Coupled with this, the fear of learning alone without mentorship made me doubt my ability to learn ui/ux. However, thanks to Axia Africa and their mentorship programs, I have been able to learn what I desired to learn in a convenient space at my own pace. Thanks Axia Africa</p>
                <div class="flex items-center gap-3 mt-[4rem]">
                <img :src="Person4" alt="person_four">
                <h3>Samuel Ogunshina</h3>
                </div>
            </div>
            <!-- ====CARD FIVE==== -->
            <div class="bg-[#faf5ee] px-3 pt-5">
                <p class="mb-[2rem] text-[0.8rem]">I always had a knack for designs but I needed the right platform to put me through and teach me properly, I found that with Axia Africa. At Axia Africa, the tutors are very kind to retake a class for you when you don’t understand a thing. If you are looking for a place where you need an efficient and reliable tutoring then Axia Africa is the right place for you.</p>
                <div class="flex items-center gap-3 mt-[4rem]">
                <img :src="Person5" alt="person_five">
                <h3>Feyisayo Olakanmi</h3>
                </div>
            </div>
            <!-- ====CARD SIX==== -->
            <div class="bg-[#faf5ee] px-3 pt-5">
                <p class="mb-[2rem] text-[0.8rem]">Axia Africa's product design class has taught me a lot of things regarding designs and how to interact with people. I've learnt a lot about the UX and UI processes. Each class has been a perfect blend of learning and fun. Thanks so much for this opportunity Axia Africa</p>
                <div class="flex items-center gap-3 mt-[4rem]">
                <img :src="Person6" alt="person_six">
                <h3>Dolapo Oyegunle</h3>
                </div>
            </div>
            <!-- ====CARD SEVEN==== -->
            <div class="bg-[#faf5ee] px-3 pt-5">
                <p class="mb-[2rem] text-[0.8rem]">Finding Axia Africa and being offered a training on product design was a turning point in my career. The lessons were planned properly and were made flexible to accommodate our different schedules.I will a 100% recommend Axia Africa to anyone who plans to take their career to the next level and is looking for a place to start.</p>
                <div class="flex items-center gap-3 mt-[4rem]">
                <img :src="Person7" alt="person_seven">
                <h3>Linda Nwodo</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Person1 from '../../assets/HomePageImg/CardAnimation/person1.png'
import Person2 from '../../assets/HomePageImg/CardAnimation/person2.png'
import Person3 from '../../assets/HomePageImg/CardAnimation/person3.png'
import Person4 from '../../assets/HomePageImg/CardAnimation/person4.png'
import Person5 from '../../assets/HomePageImg/CardAnimation/person5.png'
import Person6 from '../../assets/HomePageImg/CardAnimation/person6.png'
import Person7 from '../../assets/HomePageImg/CardAnimation/person7.png'

</script>

<style lang="scss" scoped>

</style>