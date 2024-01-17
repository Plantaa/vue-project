<script setup>
defineProps(["image"]);
</script>

<template>
<img :src="image" :class="selected"/>
</template>
<style scoped>
img {
    border: 5px solid darkblue;
    height: 150px;
    width: 200px;
}
</style>