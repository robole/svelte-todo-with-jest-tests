<script>
  import { createEventDispatcher } from "svelte";

  export let todo;

  const dispatch = createEventDispatcher();
</script>

<div>
  <input
    type="checkbox"
    checked={todo.done}
    on:click={() => dispatch("toggleDone", todo)}
    aria-label="Done"
  />
  <span class:done={todo.done}>{todo.text}</span>
</div>

<style>
  .done {
    color: gray;
    text-decoration: line-through;
  }
</style>
