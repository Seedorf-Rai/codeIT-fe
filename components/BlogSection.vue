<template>
    <section class="blog-section xl:px-36 mt-10 py-12 ">
        <h1 class="text-3xl text-center font-bold mb-4">Blogs</h1>
        <div class="grid mt-8 grid-cols-3 gap-10">
           <BlogCard featured="https://www.codeit.com.np/storage/01HP6MFCGSFGSS8MN8GMBDG8X7.webp" title="Why learn React JS" description="Learning ReactJS can be beneficial for several reasons, especially if you are interested in web development. ReactJS..." created_at="5 Months Ago" ></BlogCard>
           <BlogCard featured="https://www.codeit.com.np/storage/01HNSFKH6HE2BRF71S9FP1F8AS.webp" title="Why we are Offering..." description="As we step into 2024, our mission is crystal clear: to cultivate a generation of skilled developers who are ready to..." created_at="2 days ago" ></BlogCard>
           <BlogCard featured="https://www.codeit.com.np/storage/01HNSFS5ATVJMM8ETPSMWJ04Q9.webp" title="How much money does a per..." description="A person working in Developers and Programmers in Nepal typically earns around" created_at="08-Feb-2022" ></BlogCard>
        </div>
        <div class="flex mt-4 justify-center">
           <a href="" class="font-bold text-xl text-green-700">View All <Icon name="uil:arrow-right"></Icon> </a>
        </div>
    </section>
</template>

<style scoped>

 .blog-section{
    background-color: #F9F8FA;
 }
</style>