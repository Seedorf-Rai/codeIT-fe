<template>
    <div>
        <NavBar></NavBar>
        <main>
          <slot></slot>
        </main>
        <Footer></Footer>
    </div>
</template>

<script setup>
import {useSettings} from '../store/setting.js'
import {usePopularCourses} from '../store/popular-course.js'

const company = useSettings();
const popularCourse = usePopularCourses();

await company.fetchSettings();
await popularCourse.fetchPopularCourses();

</script>