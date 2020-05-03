import * as React from 'react';
import { render } from "@testing-library/react";
import { Input } from "../src"

describe("<Input/>", () => {
    it("should render a component", () => {
        const { getByText, debug } = render(<Input name="inputName" />)
        debug()
        expect(1).toBe(2)
    })
})