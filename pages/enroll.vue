<template>
    <div>
        <div class="cover  h-[60vh] px-20 w-full flex flex-col justify-center ">
           <h1 class="font-base text-white text-3xl">One Student Admission  Form</h1>
           <p class="text-white mt-2  font-thin">At Code IT, we understand that financial barriers should never hinder your educational journey.</p>
        </div>
        <div class="px-20 py-10">
           <h1 class="text-3xl font-bold ">Online Admission</h1>
           <p class="my-4 text-lg">To register, kindly complete the form below. Every field with an Asterisks (*) must be filled out.</p>
           <form action="">
             <h1 class="font-semibold text-xl">Personal Details <span class="text-red-500 text-2xl">*</span></h1>
             <div class="grid grid-cols-2 gap-6 py-4">
                <div class="flex flex-col">
                   <label for="">First Name <span class="text-red-500 text-2xl">*</span></label>
                   <input class="h-9 rounded-lg" type="text">
                </div>
                <div class="flex flex-col">
                   <label for="">Last Name <span class="text-red-500 text-2xl">*</span></label>
                   <input class="h-9 rounded-lg" type="text">
                </div>
                <div class="flex flex-col">
                   <label for="">Address <span class="text-red-500 text-2xl">*</span></label>
                   <input class="h-9 rounded-lg" type="text">
                </div>
                <div class="flex flex-col">
                   <label for="">Whatsapp Number <span class="text-red-500 text-2xl">*</span></label>
                   <input class="h-9 rounded-lg" type="text">
                </div>
                <div class="flex flex-col">
                   <label for="">Email <span class="text-red-500 text-2xl">*</span></label>
                   <input class="h-9 rounded-lg" type="text">
                </div>
                <div class="flex flex-col">
                   <label for="">Qualification <span class="text-red-500 text-2xl">*</span></label>
                   <!-- <input class="h-9 rounded-lg" type="text"> -->
                    <select name="" id=""  class="h-9 p-2 rounded-lg">
                        <option  value="SEE">SEE</option>
                        <option  value="Intermediate (+2)">Intermediate(+2)</option>
                        <option  value="Bachelors">Bachelors</option>
                        <option  value="Masters">Masters</option>
                        <option  value="Other">Other</option>
                    </select>
                </div>
                <div class="flex flex-col">
                   <label for="">Use <span class="text-green-600">SCODE257</span> and get instant cashback. </label>
                   <input placeholder="Referral Code" class="h-9 rounded-lg" type="text">
                </div>
             </div>
             <div class="flex flex-col">
                <h1 class="font-semibold text-xl">Select Course <span class="text-red-500 text-2xl">*</span></h1>
                   <!-- <input class="h-9 rounded-lg" type="text"> -->
                   <div class="px-10 py-2">
                    <div class="flex mb-1">
                        <input type="radio" name="" id="">
                        <p class="ms-2">Flutter (Online - Rs.999)</p>
                    </div>
                    <div class="flex mb-1">
                        <input type="radio" name="" id="">
                        <p class="ms-2"> Next JS (Online - Rs.999)</p>
                    </div>
                    <div class="flex mb-1">
                        <input type="radio" name="" id="">
                        <p class="ms-2">Python django (Online - Rs.999)</p>
                    </div>
                    <div class="flex mb-1">
                        <input type="radio" name="" id="">
                        <p class="ms-2">Professional Ethical Hacking Training (Online - Rs.999)</p>
                    </div>
                    <div class="flex mb-1">
                        <input type="radio" name="" id="">
                        <p class="ms-2">WordPress Training (Online - Rs.999) </p>
                    </div>
                   </div>
                </div>
                <div class="flex flex-col">
                  <h1 class="font-semibold text-xl">Payment Method <span class="text-red-500 text-2xl">*</span></h1>
                   <!-- <input class="h-9 rounded-lg" type="text"> -->
                    <div class="flex px-10 py-2">
                        <div class="flex mb-1">
                        <input type="radio" name="" id="">
                        <p class="ms-2">Online Payment </p>
                    </div>
                    <div class="flex mb-1 ms-10">
                        <input type="radio" name="" id="">
                        <p class="ms-2">QR Payment </p>
                    </div>
                    </div>
                </div>
                <div class="flex align-middle py-2 px-10">
                    <input type="checkbox" name="" id="">
                    <p class="ms-2">By clicking the checkbox, you agree to our <a href="" class="underline">Terms and Condition</a> and <a href="" class="underline">Privacy Policy</a> <span class="text-red-500 text-2xl">*</span></p>
                </div>
                <div class="px-10 py-2">
                    <button class="px-2 py-1 submit-btn " type="submit" ><span>Proceed For Payment</span></button>
                </div>
           </form>
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
 input,select{
    background-color: #FBFBFB;
    border: 1px solid #DEE2E6;
    padding: 4px 10px;
 }
 .submit-btn{
    background-color: #60927B;
    color: white;
    border-radius: 3px;
 }

</style>