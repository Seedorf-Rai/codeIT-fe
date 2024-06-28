import { defineStore } from "pinia";

export const useUpcomingClasses = defineStore("upcoming-classes",{
    state : ()=>{
        return {
            classes : null,
            loading : false
        }
    },
    actions : {
        async fetchUpcomingClasses(){
            try{
              this.loading = true;
              const {data:response} = await useFetch('https://codeit.com.np/api/upcoming-classes')
              this.classes = response._rawValue.data
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