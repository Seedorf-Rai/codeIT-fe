<template>
    <section class="container  xl:px-28 py-12">
        <h1 class="text-3xl text-center font-bold mb-4">Upcoming Classes</h1>
        <div class="mb-10">
           <div class="flex view items-center font-semibold  float-right text-lg ">
              <nuxt-link to="/upcoming-classes">View All</nuxt-link>
              <Icon name="uil:arrow-right"></Icon>
           </div>
        </div>
        <div class="mt-20 grid grid-cols-3  gap-10 ">
            <div v-for="c in classes" :key="c">
               <UpcomingClassCard :course_slug="c.course_slug" :image="c.image" :course_name="c.course_name" :price="c.price" :cost_price="c.cost_price" :duration="c.duration" :time="c.upcoming_dates[0].times[0].time" :date="c.upcoming_dates.date" :class_type="c.class_type" ></UpcomingClassCard>
            </div>
        </div>

    </section>
  </template>
  <script setup>
  import { useUpcomingClasses } from '~/store/upcoming-classes';
  const classes = ref([])
  const upcoming = useUpcomingClasses();
   classes.value = upcoming.classes
 </script>
  <style scoped>
  .view{
    color: #60927B ;
  }
 </style>


