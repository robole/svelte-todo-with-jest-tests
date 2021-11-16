<script>
  import TodoList from "./components/TodoList.svelte";
  import AddTodo from "./components/AddTodo.svelte";

  let todos = [
    { id: 1, text: "Create a Svelte starter app", done: true },
    { id: 2, text: "Create your first component", done: true },
    { id: 3, text: "Test your first component", done: false },
  ];

  $: uncompletedCount = todos.filter((t) => !t.done).length;
  $: status = `${uncompletedCount} of ${todos.length} remaining`;

  function addNew(event) {
    let text = event.detail;

    const id = Math.max(...todos.map(({ id }) => id)) + 1;
    todos = [...todos, { id, text, done: false }];
  }

  function toggleDone(event) {
    let todo = event.detail;

    const { id } = todo;
    todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  }
</script>

<main>
  <h1>Todos</h1>
  <AddTodo on:addNew={addNew} />
  <h2>{status}</h2>
  <TodoList {todos} on:toggleDone={toggleDone} />
</main>

<style>
  main {
    display: flex;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    background-color: rgb(255 255 121);
    border-radius: 2px;
    box-shadow: rgb(211 211 102) 1px 2px 2px 2px, rgba(0 0 0 / 20%) 0 0 1px,
      rgba(0 0 0 / 10%) 0 4px 2px;
  }
</style>
