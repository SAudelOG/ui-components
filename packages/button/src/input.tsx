import React, { useState } from 'react';

interface InputProps {
    name: string;
}

export const Input: React.FC<InputProps> = ({ name }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return <input placeholder="type something" name={name} type="text" value={inputValue} onChange={onInputChange} />;
};
