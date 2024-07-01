import { defineStore } from "pinia";
import axiosApi from "~/conf/axios";

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
              const response = await axiosApi.get('setting')
              if(response.status === 200){
                this.company = response.data.data
              }
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