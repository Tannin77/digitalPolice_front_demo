<template>
    <div class="model">
      <div class="left">
          <ul>
              <li><JumpButton class="jumpButton taskButton" 
                url="/task" button-name="任务" circle/></li>
              <li><JumpButton class="jumpButton trainingButton"  
                url="/training" button-name="训练" circle /></li>
              <li><JumpButton class="jumpButton equipmentButton" 
                url="/equipment" button-name="装备" circle /></li>
              <li><JumpButton class="jumpButton clothingButton" 
                url="/clothing" button-name="服装" circle disabled/></li>
          </ul>
      </div>
      <div class="right" :style="{backgroundImage:`url(${modelBgURL})`}">
        <table class="modelTable">
            <tr class="tr1">
              <td class="status">当前状态：{{policeInfo.taskStatus}}</td>
              <td class="height">身高/体重：{{policeInfo.heights}}cm/{{policeInfo.weights}}kg</td>
            </tr>
            <tr class="tr2">
              <td class="pcNumber">警号：{{policeInfo.pcnumber}}</td>
              <td class="workAge">警龄：{{policeInfo.workAge}}</td>
            </tr>
            <tr class="tr3">
              <td class="nativePlace">籍贯：{{policeInfo.nativePlace}}</td>
              <td class="nation">民族：{{policeInfo.nation}}</td>
            </tr>
        </table>
      </div>
  
  
  
    </div>
  </template>
  
  <script lang="ts" setup>
    import JumpButton from '../common/button/JumpButton.vue'
    const props = defineProps({
      policeInfo:{
          default(rawProps:any){
              return{
                  id:"",
                  name:"",
                  taskStatus:"",
                  heights:"",
                  weights:"",
                  pcnumber:"",
                  workAge:"",
                  nativePlace:"",
                  nation:"",
                  sex:"",
              }
          }
      }
    });
   
    let modelBgURL:any = new URL(`@/assets/image/admin/digitalPolice/policeModel.png`,import.meta.url);
    // watch(
    //   ()=>props.policeInfo.sex,
    //   (newValue)=>{
    //     if(newValue ==='女'){
    //       modelBgURL = new URL(`@/assets/image/admin/digitalPolice/femalPoliceModel.png`,import.meta.url);
    //     }else{
    //       modelBgURL = new URL(`@/assets/image/admin/digitalPolice/policeModel.png`,import.meta.url);
    //     }
    // })
  
  </script>
  
  <style scoped>
  
  .model{
    display: flex;
    justify-content: center;
    height: 100%;
    color: white;
  }
  
  .left{
    float: left;
    width: 20%;
  }
  
  .right{
    float: left;
    width: 70%;
    background-size: 730px 808px;
    background-repeat: no-repeat;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FF8022;
  }
  
  .status{
    position: absolute;
    top:185px;
    left: 550px;
  }
  
  .height{
    position: absolute;
    top:180px;
    left: 1000px;
  }
  
  .pcNumber{
    position: absolute;
    top:420px;
    left: 550px;
  }
  .workAge{
    position: absolute;
    top:415px;
    left: 1000px;
  }
  .nativePlace{
    position: absolute;
    top:580px;
    left: 550px;
  }
  .nation{
    position: absolute;
    top:580px;
    left: 1000px;
  }
  
  
  ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  
  .jumpButton{
    color: #00E0FF;
    width: 130px;
    height: 130px;
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: 800;
    border: none;
    background: url('@/assets/image/admin/home/button.png');
    background-size: 130px 130px;
  }
  
  .taskButton{
    position: absolute;
    left: 117px;
    top: 133px;
  }
  
  .trainingButton{
    position: absolute;
    left: 75px;
    top: 320px;
  }
  .equipmentButton{
    position: absolute;
    left: 68px;
    top: 501px;
  }
  .clothingButton{
    position: absolute;
    left: 109px;
    top: 680px;
  }
  
  
  </style>