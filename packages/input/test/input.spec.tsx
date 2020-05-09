import * as React from 'react';
import { render } from '@testing-library/react';
import { Input } from '../src/index';
import userEvent from '@testing-library/user-event';

describe('<Input/>', () => {
    it('should render a basic component', () => {
        const { getByPlaceholderText } = render(<Input name="inputName" />);

        expect(getByPlaceholderText('type something')).toBeInTheDocument();
    });

    it('should set an input value', () => {
        const { getByPlaceholderText } = render(<Input name="inputName" />);
        const input = getByPlaceholderText('type something');

        userEvent.type(input, 'hello world');

        expect(input).toHaveAttribute('value', 'hello world');
    });
});
