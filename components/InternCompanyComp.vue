<template>
    <div class="rounded-sm overflow-hidden">
        <img class="w-32 object-cover" :src="src" alt="">
    </div>
</template>

<script setup>
  defineProps({
    src : String
  })
</script>