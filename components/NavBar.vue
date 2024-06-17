<template>
    <div class="w-full d h-10 bg-[url('https://www.codeit.com.np/asset/img/banner.webp')] bg-cover bg-center flex justify-center items-center" >
          <div class="flex mr-2">
              <Icon name="uil:lightbulb" color="yellow" ></Icon>
              <h2 class="font-bold text-white text-sm">
                Do you know about Code IT wallet ?
              </h2>
          </div>
          <div class="font-light text-white text-sm">
            Register for our online classes to receive upto 2% instant cashback.
          </div>
      </div>
    <nav >

      <div class="px-24 py-3 flex justify-between items-center gap-8">
        <div>
            <img src="https://www.codeit.com.np/storage/01HYTEZP4QQVATVMF33WTG1J4Z.webp" class="w-44" alt="">
            <div class="text-sm">
                Inspiring Youth Since 2017
            </div>
        </div>
        <div class="w-1/3 relative">
    <input class="w-full nav-input h-11 md:px-5 lg:px-6 border-gray-500  " type="text" placeholder="What do you want to learn today ?">
    <Icon name="uil:search" class="absolute right-4 top-3" size="18" ></Icon>
  </div>
        <div class=" relative px-3">
            <div class="font-semibold">
                Upcoming Classes
            </div>
            <div class="absolute h-5 w-5 flex items-center justify-center bg-yellow-400 rounded text-white bottom-4 right-0">
                4
            </div>
        </div>
        <div class="font-light">
            <div>
                <Icon name="uil:whatsapp" ></Icon>
                9862130505
            </div>
            <div>
                <Icon name="uil:phone"></Icon>
                025-575163
            </div>
        </div>
        <div class="flex">
            <button class="px-2 py-1 portal-btn "><span>Student Portal</span></button>
            <button class="px-2 py-1 enroll-btn ms-2 ">Enroll Now
                <span><Icon name="uil:arrow-right" size="20"></Icon></span>
            </button>
        </div>

    </div>
    </nav>
</template>

<style >
*{
    font-family: 'Roboto', sans-serif;
}
nav{
    position: sticky;
    top: 0;
    background-color: #F9F8FA;
}
.nav-input::placeholder{
  font-weight: normal !important;
}
.nav-input:focus{
    outline: none;
}
.portal-btn{
    background-color: #60927B;
    color: white;
    border-radius: 3px;
}
.portal-btn span{
    display: inline-block; /* Ensure text inside buttons are inline */
    vertical-align: middle; /* Align text vertically */

}
.enroll-btn{
    background-color: #DB4A28;
    color: white;
    border-radius: 3px;
}
</style>