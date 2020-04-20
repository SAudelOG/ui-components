import * as React from 'react';

interface inputProps {
    name: string;
}

export const Input:React.FC<inputProps> = ({name}) => (
    <input placeholder="type something" name={name} type="text"/>
)