<script setup lang="ts">
import NumberType from "./components/NumberType.vue";
import Code from "./components/Code.vue";
import Array from "./components/Array.vue";
import ObjectType from "./components/ObjectType.vue";

const { x, y } = useMouse();
</script>

<template>
  <div class="row">
    isDark {{ isDark }}
    <button @click="toggleDark()">
      <i inline-block align-middle i="dark:carbon-moon carbon-sun" />

      <span class="ml-2">{{ isDark ? "Dark" : "Light" }}</span>
    </button>
    <div class="col-12"><NumberType /></div>
    <div class="col-12"><Code /></div>
    <div class="col-12"><Array /></div>
    <div class="col-12"><ObjectType /></div>

    Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>

<style>
.dark {
  background: #16171d;
  color: #fff;
}
</style>
