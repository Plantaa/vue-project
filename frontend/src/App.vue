<script setup>
import { ref } from "vue";

import Details from './components/Details.vue';
import MyComponent from './components/MyComponent.vue';
import ChildComp from './components/ChildComp.vue';
import Header from './components/Header.vue';

const greeting = ref("Hello from parent");
</script>

<template>
  <Header class="header"/>
  <main>
    <MyComponent />
    <Details />
    <ChildComp :msg="greeting" />
  </main>
</template>

<style scoped>
  .header {
    align-self: center;
  }
</style>