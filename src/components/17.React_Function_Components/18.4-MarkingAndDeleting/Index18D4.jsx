import React, { useState, useEffect } from 'react';

function Index18D4() {
    const array = ["one", "two", "three", "four", "five"];
    const [checkboxes, setCheckboxes] = useState(array.map(text => {
        return (
            {
                text: text,
                isChecked: false,
            }
        )
    }));

function handelChange (text) {
    const copyCheckboxes = [...checkboxes];
    const result = copyCheckboxes.find(checkbox => {
        return checkbox.text === text;
    });
    result.isChecked = !result.isChecked;
    setCheckboxes(copyCheckboxes);
}

    return (
        <div>
            <ul>
                {checkboxes.map(checkbox => {
                    return (
                        <li key={checkbox.text}>
                            <input
                                type="checkbox"
                                defaultChecked={checkbox.isChecked}
                                onChange={() => handelChange(checkbox.text)}
                            />
                            {checkbox.text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Index18D4;