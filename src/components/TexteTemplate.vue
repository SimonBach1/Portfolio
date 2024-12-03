<template>
  <div class="text-container" v-html="content"></div>
</template>

<script>
export default {
  name: 'TemplateTexte',
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
h2 {
  color: #444;
}

.text-container {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: fit-content;
  padding: 3%;
  font-size: 20px;
  color: #333;
}
</style>
