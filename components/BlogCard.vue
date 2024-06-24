<template>
    <div class="blog-card rounded overflow-hidden">
       <nuxt-link :to="'/blogs/'+title">
        <img :src="featured" alt="">
       </nuxt-link>
       <div class="py-4 content border-b-2 px-5">
         <p class="title font-bold text-lg mb-3">{{ title }}</p>
         <p class="text-sm text-gray-600 mb-2">{{ description }}</p>
         <nuxt-link :to="'/blogs/'+title">Read More</nuxt-link>
       </div>
       <div class="flex px-5 py-2">
          <Icon name="uil:calendar-alt"></Icon>
          <p class="text-xs text-gray-600 ms-2 ">{{ created_at }}</p>
       </div>
    </div>
</template>

<script setup>
 defineProps({
    featured : String,
    title : String,
    description : String,
    created_at : String,
 })
</script>

<style scoped>
  .blog-card{
    box-shadow: 1px 1px 12px #bbbaba;
  }
  .content{
    height: 180px;
  }
</style>

