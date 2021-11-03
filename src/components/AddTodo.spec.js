import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import AddTodo from "./AddTodo.svelte";

describe("AddTodo", () => {
  test("should render elements", () => {
    render(AddTodo);

    expect(screen.getByLabelText("Todo")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("the add button should be disabled by default", () => {
    render(AddTodo);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  test("the add button should be enabled when text is entered", async () => {
    render(AddTodo);

    await userEvent.type(screen.getByLabelText("Todo"), "abc");
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
