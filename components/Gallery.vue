<template>
    <section class=" xl:px-28 mt-10 py-4 ">
        <h1 class="text-3xl text-center font-bold mb-4">Photo Gallery</h1>
        <div class="grid mt-8 grid-cols-4 gap-6">
             <GalleryCard image="https://www.codeit.com.np/storage/01HP6NRQ8DPJG41VHV9NB26P2B.webp" title="UI/UX Bootcamp at Namuna College, BCA"></GalleryCard>
             <GalleryCard image="https://www.codeit.com.np/storage/01HNSBHPJJ2VJ26VKK7FRMS76B.webp" title="ERC girls society program"></GalleryCard>
             <GalleryCard image="https://www.codeit.com.np/storage/01HNSBC67DVMFKQZ7TJ8CFPF7N.webp" title="Vue JS Bootcamp, Koshi St.James College Itahari"></GalleryCard>
             <GalleryCard image="https://www.codeit.com.np/storage/01HNSB73X2AWAWAK00VEMV39NQ.webp" title="Certificate Distribution"></GalleryCard>
        </div>
        <div class="flex mt-4 justify-center">
           <a href="" class="font-bold text-xl text-green-700">View All <Icon name="uil:arrow-right"></Icon> </a>
        </div>
    </section>
</template>

<style scoped>


</style>