<script setup lang="ts">
import { ref } from "vue";

interface Task {
  title: string;
  description: string;
}

const taskList = ref<Task[]>([]);

const newTask = ref<Task>({ title: "", description: "" });

const addTask = (): void => {
  if (
    newTask.value.title.trim() !== "" &&
    newTask.value.description.trim() !== ""
  ) {
    taskList.value.push({ ...newTask.value });
    newTask.value = { title: "", description: "" };
  }
};

const removeTask = (index: number): void => {
  taskList.value.splice(index, 1);
};
</script>

<template>
  <div>
    <h2>Lista de Tarefas</h2>
    <ul>
      <li v-for="(task, index) in taskList" :key="index">
        <div>
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
          <button @click="removeTask(index)">Remover</button>
        </div>
      </li>
    </ul>
    <div>
      <input type="text" v-model="newTask.title" placeholder="Título" />
      <input
        type="text"
        v-model="newTask.description"
        placeholder="Descrição"
      />
      <button @click="addTask">Adicionar</button>
    </div>
  </div>
</template>

<style scoped></style>
