<template>
    <section class="voice-stds xl:px-28 mt-10 py-12 ">
        <h1 class="text-3xl text-center font-bold mb-4">Voice of Students</h1>
        <div class="grid mt-8 grid-cols-4 gap-6">
            <VoiceStdCard image="https://www.codeit.com.np/storage/01HQA5M1BTBANGXG6Z75J736E0.webp" name="Priyanshi Shah" address="Kathmandu" education="Class-7" ></VoiceStdCard>
            <VoiceStdCard image="https://www.codeit.com.np/storage/01HQ81DXS5D7S4HNDC3J5E2WGF.webp" name="Rohan Chettri" address="Canada" education="Diploma in Computer Science and Technology" ></VoiceStdCard>
            <VoiceStdCard image="https://www.codeit.com.np/storage/01HQ52DYMCZTHVDHKH210J5Z61.webp" name="Tara Pradhan" address="Japan" education="BE" ></VoiceStdCard>
            <VoiceStdCard image="https://www.codeit.com.np/storage/01HQ3SAH8V64WD1S43P7X81X2D.png" name="Angila palung Limbu" address="Dharan" education="BE" ></VoiceStdCard>
        </div>
        <div class="flex mt-4 justify-center">
           <nuxt-link class="font-bold text-xl text-green-700" to="/voice-of-students">
            View All <Icon name="uil:arrow-right"></Icon>
           </nuxt-link>
        </div>
    </section>
</template>

<style scoped>

 .voice-stds{
    background-color: #F9F8FA;
 }
</style>