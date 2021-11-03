<script>
  import { fade } from "svelte/transition";
  import Todo from "./Todo.svelte";

  export let todos = [];
</script>

{#if todos.length > 0}
  <ul>
    {#each todos as todo}
      <li transition:fade>
        <Todo {todo} on:toggleDone />
      </li>
    {/each}
  </ul>
{:else}
  <p>Congratulations, all done!</p>
{/if}

<style>
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }
</style>
