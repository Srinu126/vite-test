import { cleanup, renderHook, act } from "@testing-library/react";
import useCounter from "../hooks/useCounter";
import { describe, it, expect, afterEach } from "vitest";

afterEach(() => {
    cleanup();
});

describe("useCounter", () => {
    it("initial value is 5", async() => {
        const {result} = renderHook(() => useCounter(5));
        expect(result.current.counter).toBe(5);
    });
    it("increment", () => {
        const {result} = renderHook(() => useCounter(0));
        expect(result.current.counter).toBe(0);

       act(() => {
        result.current.increment();
       });
       expect(result.current.counter).toBe(1);

       act(() => {
        result.current.increment();
       });
       expect(result.current.counter).toBe(2);
    });
    it("decrement", () => {
        const {result} = renderHook(() => useCounter(0));
        expect(result.current.counter).toBe(0);

       act(() => {
        result.current.decrement();
       });
       expect(result.current.counter).toBe(-1);

       act(() => {
        result.current.decrement();
       });
       expect(result.current.counter).toBe(-2);

    })
});
