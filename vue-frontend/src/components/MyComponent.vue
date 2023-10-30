<script setup>
import { ref } from "vue"

const dataEndpoint = "/api/data";

const data = ref("Click here to fetch data!");

async function getData() {
    try {
        let response = await fetch(new Request(dataEndpoint));
        if (response.status !== 200) {
            console.error("API endpoint responded with a non 200 status.");
        }
        else {
            data.value = await(response.json());
            console.log(data.value);
        }
    } catch (error) {
        console.error(error);
    };
}
</script>

<template>
    <button @click="getData">{{ data }}</button>
</template>