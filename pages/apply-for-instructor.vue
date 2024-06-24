<template>
  <div>
    <div class="cover h-[60vh] px-20 w-full flex flex-col justify-center">
      <h1 class="font-base text-white text-3xl">Apply For Instructor</h1>
      <p class="text-white mt-2 font-thin">
        At Code IT, we understand that financial barriers should never hinder
        your educational journey.
      </p>
    </div>
    <p class="my-5 px-20 text-gray-500 font-light">
      Home > Apply for Instructor
    </p>
    <div class="grid grid-cols-3">
      <div class="col-span-1">
        <div class="py-16 px-10 bg-[#F8F9FA]">
          <h1 class="font-semibold text-2xl">
            Unlock Your Teaching Potential: Join Code IT as an Instructor!
          </h1>
          <p class="my-4">
            Are you a passionate IT professional with a knack for explaining
            complex concepts? Do you have a desire to share your knowledge and
            empower the next generation of tech enthusiasts? Code IT invites
            dynamic and experienced individuals to join our team as instructors.
          </p>
          <h1 class="font-semibold text-xl">
            Why Become a Code IT Instructor?
          </h1>
          <p class="my-4">
            <span class="font-bold">Shape Future Tech Leaders:</span> Inspire
            and mentor aspiring IT professionals, helping them build the skills
            they need to excel in the industry
          </p>
          <p class="my-4">
            <span class="font-bold">Shape Future Tech Leaders:</span> Inspire
            and mentor aspiring IT professionals, helping them build the skills
            they need to excel in the industry
          </p>
          <p class="my-4">
            <span class="font-bold">Shape Future Tech Leaders:</span> Inspire
            and mentor aspiring IT professionals, helping them build the skills
            they need to excel in the industry
          </p>
          <p>
            Join us on this exciting journey of knowledge sharing and skill
            development. Together, let's Code IT!
          </p>
        </div>
      </div>
      <div class="col-span-2 py-16 px-10">
        <h1 class="text-center font-bold text-2xl">
          Apply For Instructor
          <Icon name="fa6-solid:chalkboard-user" size="26"></Icon>
        </h1>
        <form action="" class="py-5">
          <div class="flex gap-6 mb-4">
            <div class="flex flex-col w-full">
              <label for=""
                >Full Name <span class="text-red-500">*</span></label
              >
              <input type="text" class="w-full rounded-lg" />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Email <span class="text-red-500">*</span></label>
              <input type="text" class="w-full rounded-lg" />
            </div>
          </div>
          <div class="flex gap-6 mb-4">
            <div class="flex flex-col w-full">
              <label for=""
                >Whatsapp Number <span class="text-red-500">*</span></label
              >
              <input type="text" class="w-full rounded-lg" />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Alternate Number (Optional)</label>
              <input type="text" class="w-full rounded-lg" />
            </div>
          </div>
          <div class="flex gap-6 mb-4">
            <div class="flex flex-col w-full">
              <label for=""
                >Your Expertise <span class="text-red-500">*</span></label
              >
              <input type="text" class="w-full rounded-lg" />
            </div>
            <div class="flex flex-col w-full">
              <label for="">Portfolio (Github or Website Link)</label>
              <input type="text" class="w-full rounded-lg" />
            </div>
          </div>
          <div class="flex flex-col w-full mb-4">
            <label for=""
              >Please upload your CV <span class="text-red-500">*</span></label
            >
            <input type="file" class="w-full rounded-lg" />
          </div>
          <div class="flex flex-col w-full mb-4">
            <label for=""
              >5 minutes teaching demo video link (youtube url or google drive
              link) <span class="text-red-500">*</span></label
            >
            <textarea type="text" rows="2" class="w-full rounded-lg"></textarea>
          </div>
          <div class="flex flex-col w-full mb-6">
            <label for=""
              >About Yourself <span class="text-red-500">*</span></label
            >
            <textarea type="text" rows="4" class="w-full rounded-lg"></textarea>
          </div>
          <button class="px-2 py-1 submit-btn mb-4">
            Submit
            <span><Icon name="uil:arrow-right" size="20"></Icon></span>
          </button>
          <p>
            By applying for instructor, I agree to the Code IT's <span class="font-bold">Terms and Conditions</span>.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  background: linear-gradient(#0f202eb4 100%, #09131bbd),
    url(https://www.codeit.com.np/asset/img/bc.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
input,
select,
textarea {
  background-color: #fbfbfb;
  border: 1px solid #dee2e6;
  padding: 4px 10px;
}
input:focus {
  outline: none;
}
.submit-btn {
  background-color: #60927b;
  color: white;
  border-radius: 3px;
}
</style>