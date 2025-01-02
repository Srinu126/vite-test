import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { Users } from "../components/Users";
import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";

afterEach(() => {
    cleanup();
  });

describe("Users",() => {
    beforeEach(() => {
        global.fetch = vi.fn();
    });
    afterEach(() => {
        vi.resetAllMocks();
    })
    it("fetches and displays the user data", async() => {
        global.fetch.mockResolvedValueOnce({
            json: async() => ([
                {id: 1, name:"srinu", username:"newuser33"},
                {id: 2, name:"paul", username:"paulrifel22"}
            ])
        })
        render(<Users/>);
        await waitFor(() => {
            expect(screen.getByText(/srinu/i)).toBeInTheDocument();
            expect(screen.getByText(/newuser33/i)).toBeInTheDocument();
        })
    })

    
});
