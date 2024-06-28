<template>
  <div>
    <div class="cover h-[60vh] w-full flex justify-center items-center">
      <div class="line"></div>
      <h1 class="font-bold text-white text-3xl">Upcoming Courses</h1>
      <div class="line"></div>
    </div>
    <div class="px-28 mb-14">
      <p class="my-5 font-light">Home > Upcoming Courses</p>
      <div class="mt-20 grid grid-cols-3 gap-10">
        <div v-for="c in classes" :key="c">
          <UpcomingClassCard
            :course_slug="c.course_slug"
            :image="c.image"
            :course_name="c.course_name"
            :price="c.price"
            :cost_price="c.cost_price"
            :duration="c.duration"
            :time="c.upcoming_dates[0].times[0].time"
            :date="c.upcoming_dates.date"
            :class_type="c.class_type"
          ></UpcomingClassCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUpcomingClasses } from "~/store/upcoming-classes";
const classes = ref([]);
const upcoming = useUpcomingClasses();
classes.value = upcoming.classes;
</script>
<style scoped>
.cover {
  background: linear-gradient(#0f202eb4 100%, #09131bbd),
    url(https://www.codeit.com.np/asset/img/bc.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.line {
  height: 2px;
  width: 300px;
  background-color: #fff;
  margin: 0 14px;
}
</style>