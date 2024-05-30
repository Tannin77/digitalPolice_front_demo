import { ref } from 'vue'
import { defineStore } from 'pinia'
import moment from "moment"


export const usePageStore = defineStore('page',
    ()=>{
        //当前页面索引
        //home:"0"，task:"1",training:"2",equipment:"3",clothing:"4"
        const currentPage = ref<string>('0');
        //头部日期选择器所选择的开始时间
        const selectedDate = ref<string>('');
        //头部日期选择器默认时间
        const startDateDefault = ref<string>(new Date().getFullYear() + '-01-01');
        const endDateDefault = ref<string>(moment().format('YYYY-MM-DD'));
    return {
        currentPage,selectedDate,startDateDefault,endDateDefault
    }
})