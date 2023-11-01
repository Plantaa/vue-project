<script setup>
import { ref, watch } from "vue"

const requestId = ref(1);
const requestData = ref(null);

const dataEndpoint = "/api/data";

async function fetchData() {
    requestData.value = null;
    const res = await fetch(dataEndpoint);
    requestData.value = await res.json();
}

watch(fetchData, {imediate: true});
</script>

<template>
    <p>Request ID: {{ requestId }}</p>
    <button @click="requestId++">Fetch next request</button>
    <p v-if="!requestData">Loading...</p>
    <pre v-else>{{ requestData }}</pre>
  </template>