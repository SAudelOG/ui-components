import * as React from 'react';
import { render } from "@testing-library/react";
import { Input } from "../src/index"

describe("<Input/>", () => {
    it("should render a basic component", () => {
        const { getByPlaceholderText } = render(<Input name="inputName" />)

        expect(getByPlaceholderText("type something")).toBeInTheDocument()
    })
})