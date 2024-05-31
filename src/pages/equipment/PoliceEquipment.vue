<script setup lang="ts">
import {onMounted, reactive} from 'vue'
import { usePageStore }   from "@/stores/pages"
import AccumulatedUsed from "./AccumulatedUsed.vue"
import SecondEquipment from "./SecondEquipment.vue"
import ThirdEquipment from "./ThirdEquipment.vue"
import FouthrEquipment from "./FourthEquipment.vue"
const pageStore = usePageStore();
onMounted(()=>{
    pageStore.currentPage = '3';
   // console.log(pageStore.currentPage)
  })

  let modelBgURL = new URL(`@/assets/image/admin/equipment/femalePoliceModel.png`,import.meta.url); //暂时写死，应从piana中获取性别

  //数据 应从后端获取，暂时写死
  let AccumulatedUsedList = reactive({
    usedNum:"0",            
    nowUsed:"0",             
    returnNum:"0",
    destoryNum:"0",
    scrapNum:"0"
  })

</script>

<template>
    <div class="equipment" :style="{backgroundImage:`url(${modelBgURL})`} ">
        <AccumulatedUsed :accumulated-used-list="AccumulatedUsedList"/>
        <SecondEquipment />
        <ThirdEquipment/>
        <FouthrEquipment/>
    </div>
</template>



<style >
.equipment{
  margin: 0px;
  width: 100%;
  height: 952px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 40%;
 }
</style>
