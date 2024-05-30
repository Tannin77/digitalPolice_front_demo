<template>
    <div class="wrapper">
        <div class="content">
            <span class="title1">自入警以来累计领用{{ AccumulatedUsedList.usedNum }}件</span>
            <div class="title2"><span>当前在用:{{ AccumulatedUsedList.nowUsed }}件</span></div>
            <div class="title3"><span>归还:{{ AccumulatedUsedList.returnNum }}件</span></div>
            <div class="title4"><span>损毁:{{ AccumulatedUsedList.destoryNum }}件</span></div>
            <div class="title5"><span>报废:{{ AccumulatedUsedList.scrapNum }}件</span></div>
            <div class="nowApplyEquipment">
            <span>当前申领装备</span>
                <div class="selectBox">
                    <el-tree-select 
                    :placeholder='nowApplyEquipment'/>
                </div>
          
      
        </div>
        </div>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { ElNotification } from "element-plus"
import { ref } from "vue";
        defineProps({
            AccumulatedUsedList  :{
                default(rawProps: any){
                    return{
                        usedNum:"0",             //领用总数
                        nowUsed:"0",             //当前在用
                        returnNum:"0",
                        destoryNum:"0",
                        scrapNum:"0"
                    }
                }
            }
        });
        let nowApplyEquipment=ref("警械")
    </script>
    
    
    <style scoped>
        .wrapper{
            position: absolute;
            left: 38px;
            top:123;
            background-image: url('@/assets/image/admin/task/outlineFrame.png');
            background-repeat: no-repeat;
            width: 600px;
            height: 925px;
    
            padding: 39px 9px 0px 12px;
        }
    
        .content{
            width: 580px;
            height: 735px;
            background-image: url('@/assets/image/admin/task/contentBackground.png');
            background-repeat: no-repeat;
            padding-top: 39px;
        }
    
        .title1{
            /* display: block; */
            width: 201px;
            height: 32px;
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            font-style: italic;
            color: #FFFFFF;
            line-height: 32px;
            text-shadow: 2px 3px 0px rgba(6,45,144,0.32);
            /* transform: skew(90deg); */
            margin-left: 64px;
           
        }
    
        .title2{
            width: 120px;
            height: 46px;
            background-image: url('@/assets/image/admin/task/title2Background.png');
            background-repeat: no-repeat;
            margin-left: 52px;
            margin-top: 20px;
            padding-top: 1px;
            padding-left: 26px;
    
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            font-style: italic;
            color: #FFFFFF;
            line-height: 32px;
            text-shadow: 2px 3px 0px rgba(6,45,144,0.32)
        }
        .title3{
            width: 80px;
            height: 46px;
            background-image: url('@/assets/image/admin/task/title2Background.png');
            background-repeat: no-repeat;
            margin-left: 210px;
            margin-top: -43px;
            padding-top: 0px;
            padding-left: 26px;
    
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            font-style: italic;
            color: #FFFFFF;
            line-height: 32px;
            text-shadow: 2px 3px 0px rgba(6,45,144,0.32)
        }
        .title4{
            width: 80px;
            height: 46px;
            background-image: url('@/assets/image/admin/task/title2Background.png');
            background-repeat: no-repeat;
            margin-left: 330px;
            margin-top: -43px;
            padding-top: 0px;
            padding-left: 26px;
    
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            font-style: italic;
            color: #FFFFFF;
            line-height: 32px;
            text-shadow: 2px 3px 0px rgba(6,45,144,0.32)
        }
        .title5{
            width: 80px;
            height: 46px;
            background-image: url('@/assets/image/admin/task/title2Background.png');
            background-repeat: no-repeat;
            margin-left: 52px;
            margin-top: -10px;
            padding-top: 0px;
            padding-left: 26px;
    
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            font-style: italic;
            color: #FFFFFF;
            line-height: 32px;
            text-shadow: 2px 3px 0px rgba(6,45,144,0.32)
        }

        .nowApplyEquipment{
        width: 100px;
        height: 50px;
        background-image: url('@/assets/image/admin/task/totalColumn.png');
        background-repeat: no-repeat;
        margin-top: 0px;
        margin-left: 35px;
        padding-top: 10px;
        padding-left: 89px;

        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        font-style: italic;
        color: #FFFFFF;
        line-height: 30px;
        text-shadow: 2px 3px 0px rgba(6,45,144,0.32);

    }
    .selectBox .el-select{
        left: 130px;
        top:-30px;
        }
        :deep(.selectBox .el-input){
        --el-input-text-color:#ffffff;
         font-size: 18px;
         font-family: PingFang SC;
        font-weight: 500;
        --el-input-width:214px;
        --el-input-height:40px;
        --el-input-bg-color:rgba(14,209,255,0.08);
        border: 1px solid #1764FF;
        border-radius: 4px;
    }
    </style>