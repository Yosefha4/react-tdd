import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";
import userEvent from "@testing-library/user-event";

it("Should have a username & password filed , also submit button", () => {
  render(<SignUpForm />);

  const signUpFormTitle = screen.getByText(/signup/i);
  const userNameField = screen.getByLabelText(/username/i);
  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitBtn = screen.getByText(/submit/i);

  expect(signUpFormTitle).toBeInTheDocument();
  expect(userNameField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
});

it("Should allow the users to submit their credeintials", async () => {
  const submitFn = jest.fn();

  render(<SignUpForm submitFn={submitFn} />);

  const userNameField = screen.getByLabelText(/username/i);
  const emailField = screen.getByLabelText(/email/i);
  const passwordField = screen.getByLabelText(/password/i);
  const submitBtn = screen.getByText(/submit/i);

  userEvent.type(userNameField, "Yosef");
  userEvent.type(emailField, "Yos052@walla.com");
  userEvent.type(passwordField, "123456Password");
  userEvent.click(submitBtn);

  expect(submitFn).toHaveBeenCalledWith({
    username: "Yosef",
    email: "Yos052@walla.com",
    password: "123456Password",
  });
});
