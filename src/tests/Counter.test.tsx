import { render, screen, cleanup } from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event"
import { describe, it, expect, afterEach } from "vitest";

afterEach(() => {
    cleanup();
  });

describe("Counter", () => {
    it("increments counter on button click", async() => {
        render(<Counter/>);
        const button = screen.getByRole("button", {name: /increment/ig});
        const counterValue = screen.getByTestId("counter-value");
        expect(counterValue.textContent).toEqual("5");
        await userEvent.click(button);
        expect(counterValue.textContent).toEqual("6");
        await userEvent.click(button);
        expect(counterValue.textContent).toEqual("7");
        
    })
});
