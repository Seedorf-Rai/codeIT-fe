<template>
  <section class="py-4 xl:px-28">
    <div class="xl:px-44">
      <h1 class="text-3xl text-center font-bold mb-4">Popular Courses</h1>
      <div class="relative w-full">

          <input
          list="datalist"
          type="text"
          class="w-full rounded-md py-2 px-4"
          placeholder="Search Courses"
        />
        <datalist id="datalist">
          <option
            v-for="course in courses"
            :key="course"
            :value="course.course_name"
            :data-slug="course.course_slug"
          ></option>
        </datalist>
        <div class="absolute z-50 bg-white right-0 border top-0 py-2 px-4">
          <Icon name="uil:search"></Icon>
        </div>

      </div>



    </div>

    <div class="grid grid-cols-4 gap-4 mt-10">
      <div v-for="course in displayedCourses" :key="course">
        <PopularCourseCard
          :course_slug="course.course_slug"
          :featured="course.featured"
          :course_name="course.course_name"
          :price="course.price"
          :cost_price="course.course_price"
          enrolled_students="9.9K"
        ></PopularCourseCard>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <button
        v-if="hasMoreItems"
        @click="loadMoreItems"
        class="px-3 py-2 load-more-btn"
      >
        Load More <Icon name="uil:sync"></Icon>
      </button>
    </div>
  </section>
</template>

<script setup>
import { usePopularCourses } from "../store/popular-course.js";

const popularCourses = ref([]);
const displayedCourses = ref([]);
const itemsPerPage = 8;
const currentPage = ref(0);
const hasMoreItems = ref(true);

const allCourses = usePopularCourses();
popularCourses.value = allCourses.courses;
const updateDisplayedCourses = () => {
  const start = currentPage.value * itemsPerPage;
  const end = start + itemsPerPage;
  displayedCourses.value = popularCourses.value.slice(0, end);
  if (end >= popularCourses.value.length) {
    hasMoreItems.value = false;
  }
};
const loadMoreItems = () => {
  currentPage.value += 1;
  updateDisplayedCourses();
};
updateDisplayedCourses();
</script>

<style scoped>
input {
  background-color: #fbfbfb;
  border: 1px solid #dfe3e6;
}
input:focus {
  outline: none;
}
.load-more-btn {
  background-color: #60927b;
  color: white;
  border-radius: 3px;
}
</style>