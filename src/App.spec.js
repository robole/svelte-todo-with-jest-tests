import { render, screen, fireEvent } from "@testing-library/svelte";

import App from "./App.svelte";

describe("App", () => {
  const PREDEFINED_TODOS = 3;

  test("should render elements", () => {
    render(App);
    expect(screen.queryByText("Todos")).toBeInTheDocument();
    expect(screen.queryByText("1 of 3 remaining")).toBeInTheDocument();
  });

  test("should add a todo", async () => {
    render(App);

    const input = screen.getByLabelText("Todo");
    const value = "Buy milk";
    await fireEvent.input(input, { target: { value } });
    await fireEvent.click(screen.getByText("Add"));

    const todoListItems = screen.getAllByRole("listitem");

    expect(screen.getByText(value)).toBeInTheDocument();
    expect(todoListItems.length).toEqual(PREDEFINED_TODOS + 1);
  });

  test("should mark a todo as done", async () => {
    let { container } = render(App);
    const checkbox = container.querySelector(
      'li:last-of-type input[type="checkbox"]'
    );

    await fireEvent.click(checkbox); // third todo
    expect(screen.getByText("0 of 3 remaining")).toBeInTheDocument();
    expect(screen.getByText("Test your first component")).toHaveClass("done");
  });

  test("should mark a todo as not done", async () => {
    let { container } = render(App);
    const checkbox = container.querySelector(
      'li:first-of-type input[type="checkbox"]'
    );

    await fireEvent.click(checkbox);
    expect(screen.getByText("2 of 3 remaining")).toBeInTheDocument();
    expect(screen.getByText("Create a Svelte starter app")).not.toHaveClass(
      "done"
    );
  });
});
