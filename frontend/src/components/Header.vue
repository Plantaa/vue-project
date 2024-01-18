<script setup>
import { ref } from "vue";

const headerClass = ref("header");

const headerText = "My Website";
const headerSubtext = "A responsive website created by me.";
</script>

<template>
    <header :class="headerClass">
        <h1>{{ headerText }}</h1>
        <p>{{ headerSubtext }}</p>
    </header>
</template>

<style scoped>
* {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}

/* Style the body */
body {
    margin: 0;
}

/* Header/logo Title */
.header {
    padding: 80px;
    text-align: center;
    background: #05201aca;
    color: white;

    & h1 {
        font-size: 40px;
    }
}
</style>
