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
  div {
    display: flex;
    align-items: flex-end;
    font-size: 1.2rem;
    gap: 0.5rem;
  }

  .done {
    color: gray;
    text-decoration: line-through;
  }

  input {
    --size: 1.2rem;

    width: var(--size);
    height: var(--size);
  }
</style>
