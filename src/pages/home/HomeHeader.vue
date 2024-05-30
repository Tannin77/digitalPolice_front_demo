<script lang="ts"   setup>
  import { getCurrentInstance,  reactive, ref } from 'vue'
  import {useRouter} from 'vue-router'
  import JumpButton from '../common/button/JumpButton.vue'
  import { usePageStore }   from "@/stores/pages"
  import { storeToRefs } from 'pinia'
  import { ElNotification } from "element-plus"

  let selectedItem = ref('厦门中院');
  const pageStore = usePageStore();
  let { currentPage,selectedDate, startDateDefault, endDateDefault  } = storeToRefs(pageStore);

  let startYear = ref("");
  let endYear = ref("");

  let homeURL='/'

  const router=useRouter();
  function fallback(){
      console.log('路由回退，返回上一级');
      router.back();
    }

    function switchHome(){
      console.log('回到数字警员首页');
      currentPage.value = "0";
      router.push({
        path: '/',
      })
    }
</script>

<template>
 <div class="header">
    <div class="title">
      福建法院数字警员
    </div>
    <!-- <div class="courtTree">
      <el-tree-select 
      v-model="selectedItem" v-show="currentPage === '0'"
        :placeholder="selectedItem"  
        check-strictly highlight-current
      />
    </div> -->

    <div class="leftButtonList">
      <JumpButton class="jumpButton"  
        url="/task" button-name="查看任务"   
        v-show="currentPage!='0'&&currentPage!='1'"
        />
      <JumpButton class="jumpButton"  
        url="/training" button-name="查看训练"  
        v-show="currentPage!='0'&&currentPage!='2'"
        />
      <JumpButton class="jumpButton"  
        url="/equipment" button-name="查看装备"
        v-show="currentPage!='0'&&currentPage!='3'" />
      <JumpButton class="jumpButton"  
        url="/clothing" button-name="查看服装"  
        v-show="currentPage!='0'&&currentPage!='4'" disabled/>
    </div>
    
    <div class="dateSelect" v-if="currentPage==='2'||currentPage==='3'">
      <el-date-picker
        v-model="selectedDate"
        type="daterange"
        range-separator="~"
        :start-placeholder="startDateDefault"
        :end-placeholder="endDateDefault"
        size="default"
        value-format="YYYY-MM-DD"
      />
    </div>

    <div class="dateSelect" v-if="currentPage==='4'">
      <el-date-picker
        v-model="startYear"
        type="year"
        size="default"
        value-format="YYYY"
        placeholder="2023"
      />
      <span id="dateSeparator">~</span>
      <el-date-picker
        v-model="endYear"
        type="year"
        size="default"
        value-format="YYYY"
        placeholder="2024"
      />
    </div>


    
    <!-- 在数字警员首页使用‘路由回退’ -->
    <el-button  @click="fallback" class="backButton" v-show="currentPage=='0'">
      <img src="@/assets/image/admin/home/backIcon.png">
    </el-button> 
    <!--在其他页面使用‘回到数字警员首页’-->
    <el-button  @click="switchHome" class="backButton" v-show = "currentPage!='0'">
      <img src="@/assets/image/admin/home/backIcon.png">
    </el-button> 

    <!-- 回到警务系统 -->
    <el-button class="homeButton">
      <a :href="homeURL"><img src="@/assets/image/admin/home/homeIcon.png"></a>
    </el-button> 
    </div>

</template>

<style scoped>
  .header {
    margin: 0px;
    background-image: url('@/assets/image/admin/home/header.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    height: 106px;
    width: 100%;
  }
  .title{
  left: 796px;
  top:34px;
  position: absolute;
  letter-spacing: 5px;
  width: 392px;
  height: 38px;
  font-size: 40px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #FFFFFF;
  text-shadow: 0px 4px 6px rgba(0,0,0,0.74);
  }

  .leftButtonList{
    left: 107px;
    top: 66px;
    position: absolute;
    z-index: 1000;
  }

  .jumpButton{
    width: 120px;
    height: 40px;
    background: rgba(14,209,255,0.08);
    border: 1px solid #1764FF;
    border-radius: 4px;

    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #DAF1FF;
   /* text-shadow: 2px 3px 0px rgba(6,45,144,0.32);*/
  }



  .backButton{
    position: absolute;
    right: 183px;
    top:40px;

    width: 70px;
    height: 70px;
    border: 0px;
    border-radius: 50%;
    background: transparent;
  }
  .homeButton{
    position: absolute;
    right: 85px;
    top:40px;

    width: 70px;
    height: 70px;
    border: 0px;
    border-radius: 50%;
    background: transparent;
  }





/** 日期选择器样式 */
.dateSelect{
  position: absolute;
  right: 270px;
  top: 80px;
}

/**整体颜色 */
:global(.el-range-editor.el-input__wrapper){
  background: rgba(14, 209, 255, 0.08);
  border-radius: 4px;
  border: 1px solid #1764FF;
  width: 300px;
}

/**两个时间 */
:global(.el-date-editor .el-range-input){
  font-family: Microsoft YaHei;
  font-weight: bold;
  font-size: 16px;
  color:#DAF1FF;
  --el-text-color-placeholder:: #DAF1FF !important;
  width: 50%;
}
/**分隔符 */
:global(.el-date-editor .el-range-separator){
  font-family: Microsoft YaHei;
  font-weight: bold;
  font-size: 16px;
  color: #DAF1FF;
}

</style>