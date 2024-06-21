<template>
    <section class="container  xl:px-28 py-12">
        <h1 class="text-3xl text-center font-bold mb-4">Upcoming Classes</h1>
        <div class="mb-10">
           <div class="flex view items-center font-semibold  float-right text-lg ">
              <a href="">View All</a>
              <Icon name="uil:arrow-right"></Icon>
           </div>
        </div>
        <div class="mt-20 grid grid-cols-3  gap-10 ">
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
        </div>

    </section>
  </template>
  <style scoped>
  .view{
    color: #60927B ;
  }
 </style>


