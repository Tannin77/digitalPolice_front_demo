<script setup lang="ts">
import {onMounted} from 'vue'
import { usePageStore }   from "@/stores/pages"

const pageStore = usePageStore();
onMounted(()=>{
    pageStore.currentPage = '2';
    console.log(pageStore.currentPage)
  })
</script>

<template>
  <h1 style="color: white; text-align: center;">训练界面</h1>
</template>



<style >

</style>
