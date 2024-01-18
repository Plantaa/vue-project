<script setup>
defineProps(["image"]);
</script>

<template>
    <img :src="image"/>
</template>
<style scoped>
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10%;
}
</style>