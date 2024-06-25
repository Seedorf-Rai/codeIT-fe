<template>
  <div class="px-20">
    <nuxt-link to="/events">
      <p class="my-5 text-gray-500 font-light">
        <Icon name="material-symbols:arrow-left-alt"></Icon> Back
      </p>
    </nuxt-link>
    <div class="grid grid-cols-3 gap-20 py-4">
      <div class="col-span-2">
        <img
          src="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp"
          alt=""
        />
        <div class="py-4">
          <h1 class="font-semibold text-3xl">Upcoming Classes From Bhadra 1</h1>
          <div class="flex my-2 items-center align-middle text-sm">
            <Icon name="material-symbols:calendar-month-outline-rounded"></Icon>
            <p class="ms-2">2024-08-01</p>
            <Icon class="ms-2" name="uil:clock"></Icon>
            <p class="ms-2">9:00 PM - 10:00 PM</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro exercitationem quod fugiat debitis placeat, ipsam mollitia, natus fugit quos voluptas, sunt praesentium cupiditate. Fugit perspiciatis repellendus officia itaque explicabo quod vero quibusdam veniam atque ad nobis accusantium, labore deleniti sit at cupiditate non officiis quo enim! Laborum, aperiam unde dolore enim ab porro illo ducimus tenetur voluptatem explicabo dignissimos minima repellat at culpa nobis quos eius doloribus corrupti. Nobis nam tempore fuga facere repellendus amet voluptatum magni accusantium repudiandae quod cupiditate maxime aspernatur obcaecati voluptates, esse, ab aliquam? Repudiandae id, dicta pariatur beatae quis eveniet debitis possimus quia a.
          </p>
        </div>
      </div>
      <div class="col-span-1 gap-10 flex flex-col">
        <EventCard id="1" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
           <EventCard id="2" :expired="true" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
           <EventCard id="3" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
           <EventCard id="4" image="https://www.codeit.com.np/storage/01J03T96TNHAP47NZ742V7T3BH.webp" date="2024-01-03" time="3:00 PM - 6:00 PM" ></EventCard>
      </div>
    </div>
  </div>
</template>