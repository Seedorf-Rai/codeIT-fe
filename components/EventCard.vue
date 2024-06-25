<template>
    <div class="card pb-4">
       <nuxt-link :to="'/events/'+ id">
        <img class=" hover:cursor-pointer object-cover w-full" :src="image" alt="">
       </nuxt-link>
       <div class="flex justify-between items-center pt-2  px-4 ">
          <div class="flex items-center align-middle text-xs">
            <Icon name="material-symbols:calendar-month-outline-rounded" ></Icon>
             <p class="ms-2">{{ date }}</p>
             <Icon class="ms-2" name="uil:clock"></Icon>
             <p class="ms-2">{{ time }}</p>
          </div>
          <NuxtLink :to="'/events/'+ id">
            <Icon name="uil:arrow-right" class="hover:cursor-pointer" size="30" ></Icon>
          </NuxtLink>
       </div>
       <div v-if="expired" class="bg-red-700 text-xs ms-4 font-bold text-white rounded h-[20px] w-[60px] flex justify-center items-center ">
         Expired
       </div>
    </div>
</template>

<style scoped>
 .card{
    box-shadow: 1px 1px 12px #bbbaba;
 }
</style>
<script setup>
 defineProps({
    id : String,
    image: String,
    date: String,
    time: String,
    expired: Boolean
 })
</script>