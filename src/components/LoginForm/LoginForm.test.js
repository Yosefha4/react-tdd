import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

it("Should have a username & password filed , also submit button", () => {
    render(<LoginForm />)

    const loginFormTitle = screen.getByText(/loginform/i);
    const userNameField = screen.getByLabelText(/username/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitBtn = screen.getByText(/submit/i);

    expect(loginFormTitle).toBeInTheDocument();
    expect(userNameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
});
