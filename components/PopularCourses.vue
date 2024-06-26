<template>
    <section class="py-4 xl:px-28">
        <div class="xl:px-44">
            <h1 class="text-3xl text-center font-bold mb-4">Popular Courses</h1>
            <div class="relative ">
                <input type="text" class="w-full rounded-md py-2 px-4" placeholder="Search Courses">
            <div class="absolute right-0 border top-0 py-2 px-4">
              <Icon name="uil:search"></Icon>
            </div>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-10">
            <PopularCourseCard course_slug="uiux" featured="https://www.codeit.com.np/storage/01HQWMWJ688YZHYWM480XJDS27.webp" course_name="UIUX" price="Rs.999" cost_price="Rs.15000" enrolled_students="9.9K"></PopularCourseCard>
            <PopularCourseCard featured="https://www.codeit.com.np/storage/01HQWSEZ4353HF3GP91SX32W45.webp" course_name="Web Designing" course_slug="web-designing" price="Rs.999" cost_price="Rs.15000" enrolled_students="9.9K"></PopularCourseCard>
            <PopularCourseCard course_slug="python-training" featured="https://www.codeit.com.np/storage/01HQWMCD2W8F3P8YTGKYS60GD7.webp" course_name="Python Training" price="Rs.999" cost_price="Rs.15000" enrolled_students="9.9K"></PopularCourseCard>
            <PopularCourseCard course_slug="python-training" featured="https://www.codeit.com.np/storage/01HQWKTCMF0XSRSH10FXE1G1JV.webp" course_name="Flutter App Training" price="Rs.999" cost_price="Rs.15000" enrolled_students="9.9K"></PopularCourseCard>
            <PopularCourseCard course_slug="python-training" featured="https://www.codeit.com.np/storage/01HQWMWJ688YZHYWM480XJDS27.webp" course_name="UIUX" price="Rs.999" cost_price="Rs.15000" enrolled_students="9.9K"></PopularCourseCard>
            <PopularCourseCard course_slug="python-training" featured="https://www.codeit.com.np/storage/01HQWMCD2W8F3P8YTGKYS60GD7.webp" course_name="Python Training" price="Rs.999" cost_price="Rs.15000" enrolled_students="9.9K"></PopularCourseCard>
        </div>
        <div class="flex justify-center mt-8">
            <button class="px-3 py-2 load-more-btn">Load More <Icon name="uil:sync"></Icon> </button>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
  input {
    background-color: #FBFBFB;
    border: 1px solid #DFE3E6;
  }
  input:focus{
   outline: none;
  }
  .load-more-btn {
    background-color: #60927B;
    color: white;
    border-radius: 3px;
  }
</style>