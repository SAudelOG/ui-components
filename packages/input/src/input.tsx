import * as React from 'react';

interface InputProps {
    name: string;
}

export const Input: React.FC<InputProps> = ({ name }) => <input placeholder="type something" name={name} type="text" />;
