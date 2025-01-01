import { render, screen, cleanup } from "@testing-library/react";
import { Greetings } from "../components/Greetings";
import { describe, it, expect, afterEach } from "vitest";

afterEach(() => {
    cleanup();
  });

describe("Greeting", () => {
    it("renders a default greeting", () => {
        render(<Greetings/>);
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });

    it("renders greeting with a name", () => {
        render(<Greetings name="srinu"/>);
        expect(screen.getByText("Hello, srinu")).toBeInTheDocument();
    })
});
