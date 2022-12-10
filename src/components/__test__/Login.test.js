import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login, {validateEmail} from "../login";

describe("Test the Login Component", () => {
    test("render the login form with 2 button", async () => {
        render(<Login />);
        const buttons = await screen.findAllByRole("button");
        expect(buttons).toHaveLength(2);
    });

    test("should validate on email validation", () => {
        const testEmail = "ramzi@gmail.com" || "ramzi@outlook.fr";
        expect(validateEmail(testEmail)).toBe(true);
    });

    test("should failed on email validation", () => {
        const testEmail = "ramzi.com";
        expect(validateEmail(testEmail)).not.toBe(true);
    });

    test("email input field should accept email", () => {
        render(<Login/>);
        const email = screen.getByPlaceholderText("Please enter email")
        userEvent.type(email, "ramzi");
        expect(email.value).not.toMatch("ramzi@gmail.com")
    });

    test("password input should have type password", () => {
        render(<Login/>);
        const password = screen.getByPlaceholderText("Please enter a password");
        expect(password).toHaveAttribute("type", "password");
    });

    test("should be able to reset the form", () => {
        const { getByTestId } = render(<Login/>);
        const resetBtn = getByTestId("reset");
        const emailInput = screen.getByPlaceholderText("Please enter email");
        const passwordInput = screen.getByPlaceholderText("Please enter a password");

        fireEvent.click(resetBtn);
        expect(emailInput.value).toMatch("");
        expect(passwordInput.value).toMatch("");
    });

    test("should be able to submit the form", () => {
        const { getByTestId } = render(<Login/>);
        const submitBtn = getByTestId("submit");
        const emailInput = screen.getByPlaceholderText("Please enter email");
        const passwordInput = screen.getByPlaceholderText("Please enter a password");

        userEvent.type(emailInput, "ramzi@gmail.com");
        userEvent.type(passwordInput, "react");

        userEvent.click(submitBtn);

        const userInfo = screen.getByText("ramzi@gmail.com");
        expect(userInfo).toBeInTheDocument();
    });
})