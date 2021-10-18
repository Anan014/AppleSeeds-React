import React from 'react'
import './style.css'

export const Button = ({
    children,
    fontWeight,
}) => {
    return (
        <button className={`${fontWeight}`}>{children}</button>
    );
};