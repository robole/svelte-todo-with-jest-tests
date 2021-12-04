<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let todoText = "";
</script>

<form on:submit|preventDefault>
  <input
    type="text"
    size="30"
    placeholder="Enter new todo here"
    aria-label="Todo"
    bind:value={todoText}
  />
  <button disabled={!todoText} on:click={() => dispatch("addNew", todoText)}
    >Add</button
  >
</form>

<style>
  form {
    display: flex;

    justify-content: flex-end;
    gap: 0.5rem;
  }
</style>
