import { render } from "@testing-library/react";
import { Login } from ".";
import { vi } from "vitest";
// import userEvent, { UserEvent } from "@testing-library/user-event";

// let user: UserEvent;
const mockedUsedNavigate = vi.fn<[string], void>();
vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));



describe("Page /login", () => {

    beforeEach(() => {
        // user = userEvent.setup();
    })

    it("renders page login", () => {
        const result = render(<Login />)
        expect(result.getByText("Login")).toBeTruthy();
    })

    it("render input email", () => {
        const result = render(<Login />)
        expect(result.getByPlaceholderText("Email")).toBeTruthy()
    })

    it("render input password", () => {
        const result = render(<Login />)
        expect(result.getByPlaceholderText("Senha")).toBeTruthy()
    })

    it("render button login", () => {
        const result = render(<Login />)
        expect(result.getByRole("button", { name: "Login" })).toBeTruthy()
    })

    it("render link signup", () => {
        const result = render(<Login />)
        expect(result.getByText("Cadastrar")).toBeTruthy()
    })

    // it("invalid e-mail", () => {
    //     const result = render(<Login />)
    //     const inputEmail = result.getByPlaceholderText("Email");
    //     const buttonLogin = result.getByRole("button", { name: "Login" })

    //     user.click(inputEmail);
    //     user.keyboard("email")
    //     user.click(buttonLogin)

    //     expect(result.getByText("Email inválido!")).toBeTruthy()
    // })

    // it("click link signup", () => {
    //     const result = render(<Login />)
    //     const linkSignup = result.getByText("Cadastrar")

    //     user.click(linkSignup)

    //     expect(mockedUsedNavigate).toHaveBeenCalledWith("/signup");
    // })

    // it("", () => {
    //     const result = render(<Login />)
    //     const buttonLogin = result.getByRole("button", { name: "Login" })
    //     const inputEmail = result.getByPlaceholderText("Email");
    //     const inputPassword = result.getByPlaceholderText("Senha");

    //     user.click(inputEmail)
    //     user.keyboard("email@example.com")
    //     user.click(inputPassword)
    //     user.keyboard("String123@")
    //     user.click(buttonLogin)
    //     console.log(mockedUsedNavigate)
    //     expect(mockedUsedNavigate).toHaveBeenCalled();
    // })
});
