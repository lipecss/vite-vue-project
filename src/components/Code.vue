<script setup lang="ts">
import { ref, onMounted } from "vue";

const name = ref<string>("Mundo");
const greetingMessage = ref<string>("");

const updateGreeting = (): void => {
  greetingMessage.value = `Olá, ${name.value}!`;
};

onMounted(() => {
  updateGreeting();
});
</script>

<template>
  <div>
    <p>{{ greetingMessage }}</p>
  </div>
</template>

<style scoped></style>
