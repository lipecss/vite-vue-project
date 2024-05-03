<script setup lang="ts">
import { ref } from "vue";

// Definindo o tipo do array de compras como uma array de strings
const shoppingList = ref<string[]>([]);

// Variável reativa para armazenar o novo item a ser adicionado
const newItem = ref<string>("");

// Função para adicionar um novo item à lista de compras
const addItem = (): void => {
  if (newItem.value.trim() !== "") {
    shoppingList.value.push(newItem.value);
    newItem.value = "";
  }
};

// Função para remover um item da lista de compras
const removeItem = (index: number) => {
  shoppingList.value.splice(index, 1);
};
</script>

<template>
  <div>
    <h2>Lista de Compras</h2>
    <ul>
      <li v-for="(item, index) in shoppingList" :key="index">
        {{ item }}
        <button @click="removeItem(index)">Remover</button>
      </li>
    </ul>
    <input type="text" v-model="newItem" placeholder="Novo item" />
    <button @click="addItem">Adicionar</button>
  </div>
</template>

<style scoped></style>
