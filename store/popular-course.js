import { defineStore } from "pinia";

export const usePopularCourses = defineStore("popular-courses",{
    state: ()=>{
        return{
            courses : null,
            loading : false
        }
    },
    actions : {
        async fetchPopularCourses(){
            try{
              this.loading = true;
              const {data:response} = await useFetch('https://codeit.com.np/api/popular-courses')
              this.courses = response._rawValue.data
            }
            catch(err){
                console.log(err);
            }
            finally{
                this.loading = false;
            }
        }
    }
})