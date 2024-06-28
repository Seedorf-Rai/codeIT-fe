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
import { useUpcomingClasses } from '~/store/upcoming-classes.js';

const company = useSettings();
const popularCourse = usePopularCourses();
const upcomingClasses = useUpcomingClasses();

await company.fetchSettings();
await popularCourse.fetchPopularCourses();
await upcomingClasses.fetchUpcomingClasses();

</script>