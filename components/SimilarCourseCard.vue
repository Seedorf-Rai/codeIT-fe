<template>
    <nuxt-link to="">
        <div class="popular-course-card w-full rounded-xl">
       <img class="w-full px-1 py-2" :src="featured" alt="">
       <div class="pt-1 pb-2">
         <p class="text-green-500 text-center">{{ course_name }}</p>
       </div>
    </div>
    </nuxt-link>
</template>

<script setup>
  defineProps({
    featured: String,
    course_name: String
 })
</script>

<style scoped>
 .popular-course-card{
    box-shadow: 1px 1px 12px #bbbaba;
    transition: transform 0.3s ease-in-out;
 }
  .popular-course-card:hover{
   transform: translateY(-10px);

  }
</style>