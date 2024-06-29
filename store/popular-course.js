import { defineStore } from "pinia";

export const usePopularCourses = defineStore("popular-courses",{
    state: ()=>{
        return{
            courses : null,
            loading : false,
            searchedCourses : []
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
        },
        async fetchSearchedCourses(q){
            try{
                this.loading = true;
                console.log(q);
                const response = await $fetch(`https://codeit.com.np/api/search-courses?q=${q}`);
                this.searchedCourses = Array.from(response.data);
                console.log(this.searchedCourses);
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