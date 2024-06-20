<template>
    <div class="voice-card">
      <img class="rounded-lg " :src="image" alt="">
      <div class="py-3">
        <p><span class="font-bold">Name:</span><span class="ms-2">{{ name }}</span></p>
        <p><span class="font-bold">Address:</span ><span class="ms-2">{{ address }}</span></p>
        <p><span class="font-bold">Education:</span><span class="ms-2">{{ education }}</span></p>
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
   name: String,
   address : String,
   education: String,
 })
</script>