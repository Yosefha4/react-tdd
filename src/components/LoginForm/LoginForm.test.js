import { act, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

it("Should have a username & password filed , also submit button", () => {
  render(<LoginForm />);

  const loginFormTitle = screen.getByText(/loginform/i);
  const userNameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitBtn = screen.getByText(/submit/i);

  expect(loginFormTitle).toBeInTheDocument();
  expect(userNameField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

it("Should allow the users to submit their credeintials", async () => {
  const submitFn = jest.fn();

  render(<LoginForm submitFn={submitFn} />);

  const userNameField = screen.getByLabelText(/username/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitBtn = screen.getByText(/submit/i);

  userEvent.type(userNameField, "Yosef");
  userEvent.type(passwordField, "123456Password");
  userEvent.click(submitBtn);

  expect(submitFn).toHaveBeenCalledWith({
    username: "Yosef",
    password: "123456Password",
  });
});
