<template>
  <div class="card overflow-hidden rounded-md">
     <img :src="image" class="w-full h-[250px] object-cover" alt="">
     <div class="px-2 py-3">
        <h1 class="text-center text-xl text-gray-500">{{ title }}</h1>
     </div>
  </div>
</template>

<script setup>
  defineProps({
    image: String,
    title: String
  })
</script>

<style scoped>
 .card{
    box-shadow: 1px 1px 12px #bbbaba;
 }
</style>