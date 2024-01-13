<script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const fileUploadURL = "http://localhost:5000/files";

  const fileSelected = ref(null);

  function onFileSelected(event) {
    fileSelected.value = event.target.files[0];
  }

  function onUpload() {
    const formData = new FormData();
    formData.append("file.txt", fileSelected.value);
    axios.post(fileUploadURL, formData).then(res => console.log(res));
  }

</script>

<template>
  <form @submit.prevent="onUpload">
    <input
    enctype="multipart/form-data"
    type="file"
    @change="onFileSelected">
    <button>Submit</button>
  </form>
</template>