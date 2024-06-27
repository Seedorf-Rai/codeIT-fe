
<template>
  <div class="container px-10 mx-auto">
    <div class="w-full ">
      <div class="divide-y mt-2">
        <details v-for="(item, index) in course_builds" :key="index" class="group">
          <summary
            class="px-10 flex cursor-pointer border-2 mt-1 list-none items-center bg-[#F9F8FA] justify-between py-4 text-lg font-medium text-secondary-900">
           <div>
            <Icon name="fa6-solid:caret-right"></Icon>  {{ item.topic }}
           </div>
            <div class="text-secondary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </summary>
          <div  class="pb-4 text-secondary-500 px-10 py-4 border-2">
             <div v-for="lesson in item.course_lessons" class="mt-1 flex items-center" :key="lesson">
                   <div class="bg-gray-600 h-2 w-2 rounded-full"></div>
                   <p class="text-lg ms-2">{{ lesson.lesson }}</p>
             </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course_builds : Array
})
</script>
