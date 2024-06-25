<template>
    <div class="px-28 pb-16">
        <p class="my-5 text-gray-500 font-light">Home > Events</p>
        <div class="flex justify-center">
            <h1 class="border-b-2 font-bold text-2xl py-2 px-32">Events</h1>
        </div>
        <div class="grid mt-8 px-20 grid-cols-3 gap-10">
           <EventCard id="1" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
           <EventCard id="2" :expired="true" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
           <EventCard id="3" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
           <EventCard id="4" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
        </div>
    </div>
</template>