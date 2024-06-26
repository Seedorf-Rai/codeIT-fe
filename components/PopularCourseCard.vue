<template>
  <nuxt-link :to="'/course/'+course_slug">
    <div class="popular-course-card w-full rounded-xl">
       <img class="w-full px-2 py-4" :src="featured" alt="">
       <div class="px-4 pb-4 pt-1">
         <p class="text-green-600">{{ course_name }}</p>
         <p class="text-sm mt-1"><span class="font-bold">Course Fee:</span><span class="new-price ms-1">{{ price }} /-</span><span class="old-price">{{ cost_price }}</span></p>
         <p class="text-green-600 text-sm mt-1">{{ enrolled_students }} Students</p>
       </div>
    </div>
  </nuxt-link>
</template>

<script setup>
  defineProps({
    course_slug: String,
    featured: String,
    course_name: String,
    price : String,
    cost_price: String,
    enrolled_students: String
 })
</script>

<style scoped>
 .popular-course-card{
    box-shadow: 1px 1px 12px #bbbaba;
    transition: transform 0.3s ease-in-out;
 }
 .old-price{
    text-decoration: line-through;
    color: red;
    margin-left: 2px;
  }
  .popular-course-card:hover{
   transform: translateY(-10px);

  }
</style>