<template>
    <section class="footer  xl:px-28 py-12">
       <div class="grid grid-cols-4 pb-5 border-b-gray-200 border-b-2">
         <div>
           <img :src="company.logo" class="w-36" alt="">
           <p class="mt-1">{{ company.contact }} , 025-575163</p>
           <p class="mt-1">{{ company.email }}</p>
           <p class="mt-1">{{ company.address }}</p>
           <p class="mt-1"><span class="font-bold text-base">Reg No.</span>{{ company.regno }}</p>
           <p class="mt-1"><span class="font-bold text-base">PAN No.</span>602345817</p>
           <p class="mt-1 font-bold text-lg" >We are on</p>
           <div class="flex mt-1">
             <div class="icon-div px-1 py-1 rounded-lg">
                <Icon name="ic:baseline-facebook" size="20"></Icon>
             </div>
             <div class="icon-div ms-2 px-2 py-1 rounded-lg">
                <Icon name="uil:instagram" size="20"></Icon>
             </div>
             <div class="icon-div ms-2 px-2 py-1 rounded-lg">
                <Icon name="uil:youtube" size="20"></Icon>
             </div>
             <div class="icon-div ms-2 px-2 py-1 rounded-lg">
                <Icon name="uil:linkedin" size="20"></Icon>
             </div>
           </div>
         </div>
         <div>
           <h1 class="pb-2 border-b-2 w-1/2 font-bold text-xl">Quick Links</h1>
           <div class="flex flex-col py-2">
             <NuxtLink to="/">Home</NuxtLink>
             <NuxtLink to="/about-us">About Us</NuxtLink>
             <NuxtLink to="/galleries">Gallery</NuxtLink>
             <NuxtLink to="/blogs">Blogs</NuxtLink>
             <NuxtLink to="/events">Events</NuxtLink>
             <NuxtLink to="/contact">Contact</NuxtLink>
           </div>
         </div>
         <div>
            <h1 class="pb-2 border-b-2 w-1/2 font-bold text-xl">Account Details</h1>
           <div class="flex flex-col py-2">
             <p><span class="font-bold me-1">Bank: </span>Nepal Bank Limited</p>
             <p><span class="font-bold me-1">Account Name:</span>Code IT</p>
             <p><span class="font-bold me-1">A/C No:</span>01600106885462000001</p>
             <p><span class="font-bold me-1">Branch:</span> Dharan</p>
             <img class="w-20" src="https://www.codeit.com.np/asset/img/fonepay-bg.webp" alt="">
             </div>
         </div>
         <div>
            <h1 class="pb-2 border-b-2 w-1/2 text-xl font-bold">Download App</h1>
            <p class="mt-1">Download Our Mobile App</p>
            <p class="mt-1">New version coming soon...</p>
         </div>
       </div>
       <div class="flex justify-between py-4">
         <p class="text-sm">Copyright © 2024 Code-IT.</p>
         <p class="text-sm">Terms & Conditions | Privacy Policy</p>
       </div>
    </section>
</template>

<script setup>

import {useSettings} from '../store/setting.js'

const settings = useSettings();
const company = settings.company

</script>

<style scoped>
 .footer {
  background-color: #F9F8FA;
 }
 .icon-div{
    background-color: #60927B;
    color: white;
 }
</style>