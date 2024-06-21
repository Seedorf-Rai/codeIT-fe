<template>
    <div>
        <div class="cover  h-[50vh] w-full flex justify-center items-center">
           <div class="line"></div>
           <h1 class="font-bold text-white text-3xl">Upcoming Courses</h1>
           <div class="line"></div>
        </div>
        <div class="px-28 mb-14">
          <p class="my-5 font-light">Home > Upcoming Courses</p>
          <div class="mt-20 grid grid-cols-3  gap-10 ">
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
             <UpcomingClassCard image="https://www.codeit.com.np/storage/01HR1PZVM448JAVSEZNPHWB5BM.webp" course_name="Flutter Training" price="Rs.999" cost_price="Rs.16000" duration="10 days" time="8:00PM-9:00PM" date="July 02, 2024" class_type="online" ></UpcomingClassCard>
        </div>
        </div>
    </div>
</template>
<style scoped>
 .cover{
    background: linear-gradient(#0f202eb4 100%, #09131bbd) , url(https://www.codeit.com.np/asset/img/bc.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
 }
 .line{
    height: 2px;
    width: 300px;
    background-color: #fff;
    margin: 0 14px;
 }
</style>