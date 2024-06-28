<template>
    <div class="px-14 py-8">
        <p class="px-10 font-light text-gray-600">Home > Framework > {{ course.course_name }}</p>
        <div class="grid py-4 grid-cols-3">
           <div class="col-span-2">
              <img class="course-img w-2/3 h-[250px] object-cover rounded-md " :src="course.featured" alt="">
              <div class="pb-2 px-10 title my-10 ">
                <h1 class="font-bold text-3xl py-4 border-b-2 ">{{ course.course_name }}</h1>
                <div class="flex justify-between py-2">
                    <p><span class="font-bold">Duration: </span>{{ course.duration }}</p>
                    <p><span class="font-bold">Course Fee: </span> {{ course.price }} /- <span class="line-through text-red-500"  >{{ course.cost_price }}</span></p>
                </div>
              </div>
              <div class="px-10 desc" v-html="course.description"></div>
               <div class="px-10">
                 <h1 v-if="course.what_you_will_learn" class="font-semibold text-2xl mt-10">What you will Learn</h1>
                 <div v-if="course.what_you_will_learn" class="grid grid-cols-2 gap-10 py-4">
                    <div class="flex items-center text-lg" v-for="item in what_you_will_learn" :key="item">
                        <Icon name="uil:check-circle" class="flex-shrink-0" size="24" ></Icon>
                        <p class="ms-2 ">{{ item }}
                        </p>
                    </div>
                 </div>
                 <h1 v-if="course.material_included" class="font-semibold text-2xl mt-10">Materials Included</h1>
                 <div v-if="course.material_included" class="grid grid-cols-2 gap-10 py-4">
                    <div class="flex items-center text-lg" v-for="item in materials_included" :key="item" >
                        <Icon name="uil:check-square" class="flex-shrink-0" size="24" ></Icon>
                        <p class="ms-2 ">{{ item }}
                        </p>
                    </div>
                 </div>
                 <h1 v-if="course.requirements" class="font-semibold text-2xl mt-10">Requirements</h1>
                 <div v-if="course.requirements" class="grid grid-cols-2 gap-10 py-4">
                    <div class="flex items-center text-lg" v-for="item in requirements" :key="item" >
                        <Icon name="uil:check-circle" class="flex-shrink-0" size="24" ></Icon>
                        <p class="ms-2 ">{{ item }}
                        </p>
                    </div>
                 </div>
               </div>
               <h1 v-if="course.course_builds" class="font-semibold px-10 text-2xl mt-10 mb-4">Course Syllabus</h1>
               <Accordion v-if="course.course_builds" :course_builds="course.course_builds"></Accordion>
           </div>
           <div class="col-span-1">
              <div class="class-info text-white py-6 rounded-lg px-6">
                 <h1 class="text-2xl">Upcoming Class Schedule</h1>
                 <div class="flex justify-between py-2">
                      <div>
                        <p> <Icon name="uil:calendar-alt" class="me-2" ></Icon>July 4, 2024 </p>
                        <p class="mt-2"> <Icon name="uil:clock" class="me-2" ></Icon>8:00 PM - 9:00 PM </p>
                      </div>
                      <div>
                         <p>Class Type</p>
                         <p>Online</p>
                      </div>
                 </div>
              </div>
              <div class="form py-4 mt-4 px-6 rounded-lg">
                    <h1 class="text-2xl font-semibold">Quick Enquiry <Icon name="uil:comment-question"></Icon></h1>
                    <form action="">
                        <div class="flex flex-col mt-4">
                            <label for="">Course</label>
                            <input type="text" class="p-2 rounded-lg" disabled value="Next JS">
                        </div>
                        <div class="flex flex-col mt-4">
                            <label for="">Please select course type</label>
                            <select name="" id="" class="p-2 rounded-lg">
                                <option value="Online">Online</option>
                                <option value="Physical">Physical</option>
                            </select>
                        </div>
                        <div class="flex flex-col mt-4">
                            <label for="">Full Name <span class=" text-lg text-red-500">*</span></label>
                            <input type="text" class="p-2 rounded-lg" >
                        </div>
                        <div class="flex flex-col mt-4">
                            <label for="">Address <span class=" text-lg text-red-500">*</span></label>
                            <input type="text" class="p-2 rounded-lg" >
                        </div>
                        <div class="flex flex-col mt-4">
                            <label for="">Mobile <span class=" text-lg text-red-500">*</span></label>
                            <input type="text" class="p-2 rounded-lg" >
                        </div>
                        <div class="flex flex-col mt-4">
                            <label for="">Message <span class=" text-lg text-red-500">*</span></label>
                            <textarea name="" id="" class="p-4 rounded-lg" value="I want to learn Next JS. Please tell me more about this course." cols="30" rows="3"></textarea>
                        </div>
                        <button class="px-3 py-2 mt-4 submit-btn" type="submit">Submit Enquiry
                <span><Icon name="uil:arrow-right" size="20"></Icon></span>
                </button>
                    </form>
                 </div>
           </div>
        </div>
        <div class="px-24 mt-10">
            <h1 class="font-bold text-3xl border-b-2 pb-3">
            Similar Courses
            </h1>
            <div class="grid grid-cols-4 gap-10 mt-5 px-10">
               <div v-for="course in course.similar" :key="course">
                <SimilarCourseCard :course_slug="course.course_slug" :course_name="course.course_name" :featured="course.featured"></SimilarCourseCard>
               </div>
             </div>
        </div>
    </div>
</template>
<style scoped>
:deep(p) {
  @apply text-lg;
  @apply my-2;
}
:deep(h2) {
  @apply text-2xl;
  @apply font-bold;
  @apply my-4;
}
:deep(h3) {
  @apply text-2xl;
  @apply font-bold;
  @apply my-4;
}
:deep(li) {
  @apply text-lg;
  @apply my-1
}
.title{
    background: white;
    position: sticky;
    top: 90px;

}
.class-info{
    background-color: #60927B;
}
.form{
    background-color: #F8F9FA;
    border: 0.5px solid #c2c2c2;
}
input,select,textarea{
    background-color: #fff;
    border: 0.5px solid #c7c7c7;
}
.submit-btn{
    background-color: #60927B;
    color: white;
    border-radius:5px;
 }
 .desc p{
   font-size: 30px !important;
   font-weight: bold !important;
 }
</style>
<script setup>
import {usePopularCourses} from '../../store/popular-course'

function convertParagraphToArray(paragraph) {
    // Split the paragraph by comma and trim any extra spaces
    return paragraph.split(',').map(item => item.trim());
}
const what_you_will_learn = ref([])
const materials_included = ref([])
const requirements = ref([])
const allCourses = usePopularCourses();
const req_course = useRoute().params.course;


const course = allCourses.courses.find(c => c.course_slug == req_course)
what_you_will_learn.value = convertParagraphToArray(course.what_you_will_learn)
materials_included.value = convertParagraphToArray(course.material_included)
requirements.value = convertParagraphToArray(course.requirements)


</script>