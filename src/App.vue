<script setup lang="ts">
import NumberType from "./components/NumberType.vue";
import Code from "./components/Code.vue";
import Array from "./components/Array.vue";
import ObjectType from "./components/ObjectType.vue";
</script>

<template>
  <div class="row">
    <div class="col-12"><NumberType /></div>
    <div class="col-12"><Code /></div>
    <div class="col-12"><Array /></div>
    <div class="col-12"><ObjectType /></div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
