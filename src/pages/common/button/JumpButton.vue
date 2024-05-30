<template>
    <el-button @click="toTaskPage()">{{buttonName}}</el-button>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    
    const props = defineProps<{
        buttonName:string,
        url:string,
    }>();

    const router = useRouter();
    function toTaskPage(){
        console.log(props.url)
        router.push({
            path: props.url,
        })
  }
</script>

<style>

</style>