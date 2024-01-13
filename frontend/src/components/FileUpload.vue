<script setup>
  import { ref } from "vue";
  import axios from "axios";
  
  const fileUploadURL = import.meta.env.VITE_LOCAL_DEV_BACKEND_FILE_ENDPOINT || "/api/file";

  const fileSelected = ref(null);

  function onFileSelected(event) {
    fileSelected.value = event.target.files[0];
  }

  function onUpload() {
    const formData = new FormData();
    formData.append("file.txt", fileSelected.value);
    //axios.post(fileUploadURL, formData).then(res => console.log(res));
    fetch(fileUploadURL, {
      method: "post",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => console.log(res));
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