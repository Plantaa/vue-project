<script setup>
    import { ref } from "vue";

    const fileInput = ref(null);
    const files = ref();

    handleFileChange = () => files.value = fileInput.value
</script>

<template>
    <form>
    <div>
      <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
      <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
    </div>
    <div class="preview">
      <p>No files currently selected for upload</p>
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>