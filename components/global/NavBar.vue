<template>
    <div class="w-full d py-2 flex items-center  flex-col   justify-center    bg-[url('https://www.codeit.com.np/asset/img/banner.webp')] bg-cover bg-center md:flex md:flex-row md:justify-center md:items-center" >
          <div class="flex tex-center">
              <Icon name="uil:lightbulb" color="yellow" ></Icon>
              <h2 class="font-bold text-white text-sm">
                Do you know about Code IT wallet ?
              </h2>
          </div>
          <div class="font-light text-center text-white text-sm">
            Register for our online classes to receive upto 2% instant cashback.
          </div>
     </div>
     <nav >

      <div class="2xl:px-20  xl:px-15 lg:px-8 md:px-4 py-3 md:flex md:justify-between grid grid-cols-2 md:items-center gap-8">
        <div>
            <nuxt-link to="/"><img :src="company.logo" class="w-44" alt=""></nuxt-link>
            <div class="xl:text-sm text-xs">
                Inspiring Youth Since 2017
            </div>
        </div>
        <div class="md:w-1/3 w-full relative">
    <form action="">
        <input list="datalist" v-model="navSearch" class="w-full bg-white nav-input h-11 md:px-5 lg:px-6  " type="text" placeholder="What do you want to learn today ?">

            <button >
            <Icon name="uil:search" class="absolute right-4 top-3 bg-white w-10  " size="18" ></Icon>
        </button>
    </form>
    <datalist id="datalist">
        <option v-for="course in courses" :key="course" :value="course.course_name" :data-slug="course.course_slug" ></option>
    </datalist>

  </div>
        <div class=" relative md:w-auto w-full justify-center xl:px-3">
            <div class="font-semibold">
                <nuxt-link to="/upcoming-classes">Upcoming Classes</nuxt-link>
            </div>
            <div class="absolute h-5 w-5 flex items-center justify-center bg-yellow-400 rounded  text-white -top-3 right-0">
                4
            </div>
        </div>
        <div class="font-light text-sm xl:text-base">
            <div>
                <a href="https://wa.me/9862130505">
                    <Icon name="uil:whatsapp" ></Icon>
                {{ company.contact }}
                </a>
            </div>
            <div>
               <a href="tel:025-575163">
                <Icon name="uil:phone"></Icon>
                025-575163
               </a>
            </div>
        </div>
        <div class="flex md:w-auto w-full col-span-2 justify-around">
            <button class="px-2 py-1 portal-btn "><span>Student Portal</span></button>
            <nuxt-link to="/enroll">
                <button class="px-2 py-1 enroll-btn ms-2 ">Enroll Now
                <span><Icon name="uil:arrow-right" size="20"></Icon></span>
            </button>
            </nuxt-link>
        </div>

    </div>
    </nav>
</template>

<script setup>
import {useSettings} from '~/store/setting.js'
import {usePopularCourses} from '~/store/popular-course.js';


const navSearch = ref();
const course_slug = ref()
const settings = useSettings();
const company = settings.company
const temp = usePopularCourses();
const courses = temp.courses
// const company = settings.company

</script>

<style >
*{
    font-family: 'Roboto', sans-serif;
}
nav{
    position: sticky;
    top: 0;
    background-color: #F9F8FA;
    z-index: 1000;
}
@media screen and (max-width: 640px) {
  nav{
    position: relative;
  }
}
.nav-input::placeholder{
  font-weight: normal !important;
}
.nav-input:focus{
    outline: none;
}
.portal-btn{
    background-color: #60927B;
    color: white;
    border-radius: 3px;
}
.portal-btn span{
    display: inline-block; /* Ensure text inside buttons are inline */
    vertical-align: middle; /* Align text vertically */

}
.enroll-btn{
    background-color: #DB4A28;
    color: white;
    border-radius: 3px;
}
</style>