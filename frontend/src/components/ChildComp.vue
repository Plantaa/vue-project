<script setup>
const props = defineProps({
    msg: String,
})
</script>

<template>
    <h2>{{ msg || "No props passed yed" }}</h2>
</template>