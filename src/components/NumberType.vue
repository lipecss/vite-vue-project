<script setup lang="ts">
import { ref } from "vue";

const randomNumber = ref(0);

setInterval(() => {
  randomNumber.value = Math.floor(Math.random() * 100);
}, 1000);
</script>

<template>
  <div>
    <code> const randomNumber = ref(0); </code>

    <p>Exemplo de tipo number:</p>
    <p>{{ randomNumber }}</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
