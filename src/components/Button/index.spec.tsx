import { render } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { Mock, vi } from "vitest";
import { Button } from ".";
import { icons } from "antd/es/image/PreviewGroup";

let user: UserEvent
let buttonFunction: Mock<void[], void>

describe("Button Component", () => {

    beforeEach(() => {
        user = userEvent.setup();
        buttonFunction = vi.fn();
    })

    it("renders button with correct label", () => {
        const result = render(<Button label="Click Me" />)
        expect(result.getByText("Click Me")).toBeTruthy();
    })

    it("calls buttonFunction when button is clicked", async () => {
        const result = render(<Button label="Click Me" buttonFunction={buttonFunction} />)
        const button = result.getByText("Click Me");

        await user.click(button);

        expect(buttonFunction).toHaveBeenCalledTimes(1);
    })

    it("not calls buttonFunction when button is disabled", async () => {
        const result = render(<Button label="Click Me" buttonFunction={buttonFunction} disabled />)
        const button = result.getByText("Click Me");

        await user.click(button).catch(() => { });

        expect(buttonFunction).not.toHaveBeenCalled();
    })

    it("renders button with correct icon", () => {
        const ariaLabel = "right"
        const icon = icons[ariaLabel]
        const result = render(<Button icon={icon} label="Click Me" />)
        expect(result.getByRole("img").ariaLabel == ariaLabel).toBeTruthy();
    })

    
});