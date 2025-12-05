import { render,screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Greet from "./greet";



describe("Greet Component", () => { 


    test(" renders correctly", () => {
        render(<Greet/>);
        const element = screen.getByText(/Hello/);
        expect(element).toBeInTheDocument();

    });

    // test( " renders with a name", () => {
    //     render(<Greet name="Alice"/>);
    //     const textelement = screen.getByText("Hello Alice");
    //     expect(textelement).toBeInTheDocument();
    // })
});

