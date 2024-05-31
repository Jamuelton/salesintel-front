import { render } from "@testing-library/react";
import { SignUp } from ".";
import { vi } from "vitest";

const mockedUsedNavigate = vi.fn<[string], void>();
vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Page /signup", () => {

    beforeEach(() => {
    })

    it("renders page signup", () => {
        const result = render(<SignUp />)
        expect(result.container).toBeTruthy();
    })

    it("render input name establishment", () => {
        const result = render(<SignUp />)
        expect(result.getByPlaceholderText("Empresa")).toBeTruthy()
    })

    it("render input email", () => {
        const result = render(<SignUp />)
        expect(result.getByPlaceholderText("Email")).toBeTruthy()
    })

    it("render input password", () => {
        const result = render(<SignUp />)
        expect(result.getByPlaceholderText("Senha")).toBeTruthy()
    })

    it("render button SignUp", () => {
        const result = render(<SignUp />)
        expect(result.getByRole("button", { name: "Cadastrar" })).toBeTruthy()
    })

})