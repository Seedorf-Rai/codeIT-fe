<template>
    <div class="card w-full rounded-xl ">
        <NuxtLink :to="'/course/'+ course_slug"> <img class="w-full h-[250px] px-2 py-4" :src="image" alt=""></NuxtLink>
        <div class="px-4 py-5">
            <p><span class="new-price">{{ price }} /-</span><span class="old-price">{{ cost_price }}</span></p>
            <p class="font-bold my-1">{{ course_name }}</p>
            <div class="flex">
                <p class="font-bold">Starting From:</p>
                <p class="ms-2">{{ date }}</p>
            </div>
            <div class="flex border-2 text-center justify-between mt-2 py-1 px-2 rounded-md">
                <div class="border-r-2 pe-4">
                   <h5 class="font-semibold">Duration</h5>
                   <small>{{ duration }}</small>
                </div>
                <div class="border-r-2 pe-4">
                    <h5 class="font-semibold">Class Type</h5>
                    <small>{{ class_type }}</small>
                </div>
                <div class="pe-4">
                    <h5 class="font-semibold ">Class Time</h5>
                    <small>{{ time }}</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
 defineProps({
    course_slug : String,
    image: String,
    course_name: String,
    cost_price: String,
    price : String,
    duration : String,
    class_type: String,
    date: String,
    time: String
 })
</script>
<style scoped>
  .card{
    box-shadow: 1px 1px 12px #bbbaba;
  }
  .old-price{
    text-decoration: line-through;
    color: red;
    margin-left: 2px;
  }
</style>