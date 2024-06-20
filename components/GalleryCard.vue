<template>
    <div class="voice-card">
      <img class="rounded-lg " :src="image" alt="">
      <div class="py-3">
          <p class="text-center">{{ title }}</p>
      </div>
    </div>
</template>

<style scoped>
  img{
    height: 300px;
    object-fit: cover;
    width: 400px;
  }
  img:hover{
    transform: scale(1.05);
  }
</style>

<script setup>
 defineProps({
   image: String,
   title: String,
 })
</script>