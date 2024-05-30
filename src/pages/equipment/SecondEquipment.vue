<template>
    <div class="wrapper">
        <div class="contain">
            <div class="header">
                <span>防爆器材共{{ otherTaskList.total }}件</span>
            </div>
            <div class="content">
                <el-scrollbar max-height="180px">

                <span class="firstRow">便携式阻车器：<br></span>
                
                <span class="secondRow">1件</span>
                </el-scrollbar>
            </div>
        </div>
    
    </div>
</template>

<script setup lang="ts">
    defineProps({
        otherTaskList:{
                default(rawProps: any){
                    return{
                        total:"",           //其他用警任务总次数
                        securityVisitor:"", //机关安全和涉诉信访应急处置-出警人次
                        list:[{                     //其余用警列表
                            "num":"",       //次数
                            "type":"",      //类型编码
                            "typeName":"",  //类型名称
                        }],                    
                    }
                }
            }
    });

    function getBGColor(index:number){
        if(index==0||index==4 || index ==8||index ==12||index ==16){
            return 'rgba(41,104,207,0.45)';
        }else{
            return 'rgba(41,104,207,0.2)';
        }
    }
</script>

<style scoped>
    .wrapper{
        width: 510px;
        height: 229px;
        border: 1px solid #00B6FF;
        border-radius: 4px;

        position: absolute;
        top:183px;
        right: 154px;
    }
    .contain{
        width: 493px;
        height: 210px;
        background: rgba(19,31,66,0.6);
        border-radius: 1px;
        position: relative;
        left: 9px;
        top: 1px;
        font-size: 16px;
        color: #FFFFFF;
    }
    .header{
        width: 493px;
        height: 24px;
        background: rgba(21,214,255,0.8);
        border-radius: 1px;

        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #DAF1FF;
        text-shadow: 2px 3px 0px rgba(6,45,144,0.32);
    }
    .content{
        position: relative;
        top: 10px;
    }

    .content span{
        line-height: 30px;
    }
    .firstRow{
        position: relative;
        left: 5px;
        width: 500px;
        font-weight: bold;
        display: inline-flex;
        background: rgba(41,104,207,0.2);
    }
    .secondRow{
        position: relative;
        left: 5px;
        font-weight: bold;
        width: 500px;
        display: inline-flex;
        
    }
    
   
</style>