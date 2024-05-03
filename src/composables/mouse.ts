import { ref, onMounted, onUnmounted, Ref } from 'vue'

// Definindo a interface para os dados do mouse
interface MouseData {
  x: Ref<number>;
  y: Ref<number>;
}

// by convention, composable function names start with "use"
export function useMouse(): MouseData {
  // state encapsulated and managed by the composable
  const x: Ref<number> = ref(0)
  const y: Ref<number> = ref(0)

  // a composable can update its managed state over time.
  function update(event: MouseEvent) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  return { x, y }
}