<template>
  <div class="home">
      <HomeHeader/>
      <router-view v-slot="{Component}">
        <KeepAlive include="PoliceModel">
          <component :is="Component" />
        </KeepAlive>
      </router-view>
  </div>
</template>

<script lang="ts" setup>
import HomeHeader from "./HomeHeader.vue"
import PoliceModel from "./PoliceModel.vue"
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    background-image: url('@/assets/image/admin/home/background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    position: fixed;
  }
</style>
