<template>
    <div>
        <img class="w-32" :src="src" alt="">
    </div>
</template>

<script setup>
  defineProps({
    src : String
  })
</script>