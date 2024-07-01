<template>
    <nuxt-link :to="'/course/'+ course_slug">
        <div class="popular-course-card w-full rounded-md">
       <img class="w-full px-1 py-2" :src="featured" alt="">
       <div class="pt-1 pb-2">
         <p class="text-green-500 text-center">{{ course_name }}</p>
       </div>
    </div>
    </nuxt-link>
</template>

<script setup>
  defineProps({
    course_slug: String,
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