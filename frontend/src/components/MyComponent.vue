<script setup>
import { ref, watch } from "vue"

const requestId = ref(1);
const requestData = ref(null);

const dataEndpoint = import.meta.env.VITE_LOCAL_DEV_BACKEND_DATA_ENDPOINT || "/api/data";

async function fetchData() {
    requestData.value = null;
    console.log(dataEndpoint);
    try {
        const res = await fetch(dataEndpoint);
        console.log(res);
        if (!res.ok) {
            console.warn(`Backend API respondend with status code ${res.status}`);
        }
        else requestData.value = await res.json();
    } catch (error) {
        console.error(error);
    }
}; fetchData();

watch(requestId, fetchData);
</script>

<template>
    <p>Request ID: {{ requestId }}</p>
    <button @click="requestId++">Fetch next request</button>
    <p v-if="!requestData">Loading...</p>
    <pre v-else>{{ requestData }}</pre>
</template>