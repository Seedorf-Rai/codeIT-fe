import { defineStore } from "pinia";

export const useSettings = defineStore("settings",{
    state: ()=>{
        return{
            company : null,
            loading: false
        }
    },
    actions : {
        async fetchSettings(){
            try{
              this.loading = true;
              const {data:response} = await useFetch('https://codeit.com.np/api/setting')
              this.company = response._rawValue.data
              console.log(this.company);
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