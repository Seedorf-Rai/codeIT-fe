<template>
    <section class=" md:grid md:grid-cols-2 flex flex-col-reverse md:gap-14  md:px-28 pt-16 pb-6  ">
      <div class="py-4 md:px-0 px-5 pe-10">
        <p><span class="text-sm md:text-xl">Only For</span> <span class="md:text-4xl text-2xl text-red-600" >Rs.999/-</span></p>
        <h1 class="mt-6 text-4xl md:text-6xl leading-tight font-bold">Master New <span class="relative">Skills <img src="https://www.codeit.com.np/asset/img/line.png" class="absolute right-0 bottom-0" alt=""></span> with Code IT </h1>
        <p class="md:text-xl text-base leading-relaxed">At Code IT, we understand that financial barriers should never hinder your educational journey.</p>
        <nuxt-link to="/enroll">
            <button class="px-3 py-2 mt-10 enroll-btn  ">Enroll Now
                <span><Icon name="uil:arrow-right" size="20"></Icon></span>
            </button>
        </nuxt-link>
    </div>
    <div >
        <img src="https://www.codeit.com.np/asset/img/HeroImage.webp" class="object-cover" alt="">
    </div>
    </section>
</template>
<style scoped>

 section {
    background-color: #EEF5F1;
    min-height: 510px;
 }
 .enroll-btn{
    background-color: #DB4A28;
    color: white;
    border-radius: 3px;
}
</style>