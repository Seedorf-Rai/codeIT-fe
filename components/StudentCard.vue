<template>
    <div class="card rounded-md overflow-hidden">
       <img class="h-[250px] w-full object-cover" :src="image" alt="">
       <div class="py-2 px-3">
         <p><span class="font-bold">Name: </span>{{ name }}</p>
         <p><span class="font-bold">Address: </span>{{ address }}</p>
         <p><span class="font-bold">Education: </span>{{ truncatedEducation }}</p>
       </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    name: String,
    address: String,
    education: String,
 })
 const truncatedEducation = computed(() => {
  return props.education.length > 15 ? props.education.substring(0, 15) + '...' : props.education
})
</script>

<style scoped>
 .card{
    box-shadow: 1px 1px 12px #bbbaba;
 }
</style>