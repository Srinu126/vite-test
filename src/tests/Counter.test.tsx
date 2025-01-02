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
        expect(counterValue.textContent).toEqual("0");
        await userEvent.click(button);
        expect(counterValue.textContent).toEqual("1");
        await userEvent.click(button);
        expect(counterValue.textContent).toEqual("2");
        
    })
});
