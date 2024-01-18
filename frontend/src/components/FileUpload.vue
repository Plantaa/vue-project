<script setup>
import { ref, computed } from "vue";
import ImagePreview from "./ImagePreview.vue";
const fileUploadURL = import.meta.env.VITE_LOCAL_DEV_BACKEND_FILE_ENDPOINT || "/api/file";

const fileSelected = ref(null);
const image = ref(null);

function onFileSelected(event) {
  fileSelected.value = event.target.files[0];
  if (!fileSelected.value) { image.value = null; return; }
  image.value = URL.createObjectURL(fileSelected.value);
}

function onUpload() {
  const formData = new FormData();
  formData.append("file.txt", fileSelected.value);
  fetch(fileUploadURL, {
    method: "post",
    body: formData,
  }).then(res => console.log(res));
}
</script>

<template>
  <form @submit.prevent="onUpload">
    <input enctype="multipart/form-data" type="file" @change="onFileSelected">
    <button>Submit</button>
  </form>
  <ImagePreview :image="image"/>
</template>

<style scoped>
img {
  display: block;
  width: 10%;
  padding: 0px 0px 0px 0px;
  border: 0;
  margin: 0;
  outline: 0;
  text-align: left;
}
</style>