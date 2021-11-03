import { render, screen } from "@testing-library/svelte";
import { fireEvent } from "@testing-library/svelte/node_modules/@testing-library/dom";

// @ts-ignore
import Todo from "./Todo.svelte";

describe("Todo", () => {
  const todoDone = { id: 1, text: "buy milk", done: true };
  const todoNotDone = { id: 2, text: "do laundry", done: false };

  test("shows the todo text when rendered", () => {
    render(Todo, { props: { todo: todoDone } });

    expect(screen.getByLabelText("Done")).toBeInTheDocument(); //checkbox
    expect(screen.getByText(todoDone.text)).toBeInTheDocument();
  });

  test("the checkbox should be checked when a todo is done", () => {
    render(Todo, { props: { todo: todoDone } });

    expect(screen.getByLabelText("Done")).toBeChecked();
  });

  test("a done class should be added to the text item when a todo is done", () => {
    render(Todo, { props: { todo: todoDone } });

    expect(screen.getByText(todoDone.text)).toHaveClass("done");
  });

  test("the checkbox should not be checked when a todo is not done", () => {
    render(Todo, { props: { todo: todoNotDone } });

    expect(screen.getByLabelText("Done")).not.toBeChecked();
  });

  test("a done class should not be added to the to the text item when a todo is not done", () => {
    render(Todo, { props: { todo: todoNotDone } });

    expect(screen.getByText(todoNotDone.text)).not.toHaveClass("done");
  });
});
