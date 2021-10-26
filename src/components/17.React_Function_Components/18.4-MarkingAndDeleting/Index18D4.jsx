import React, { useState } from 'react';
import Button from './Button';

function Index18D4() {
    const array = ["one", "two", "three", "four", "five"];
    const [checkboxes, setCheckboxes] = useState(array.map(text => {
        return (
            {
                text: text,
                isChecked: false,
                display: false,
            }
        )
    }));

    function handelChange(text) {
        const copyCheckboxes = [...checkboxes];
        const result = copyCheckboxes.find(checkbox => {
            return checkbox.text === text;
        });
        result.isChecked = !result.isChecked;
        setCheckboxes(copyCheckboxes);
    }

    function handelOnClick(event) {
        const copyCheckboxes = [...checkboxes];
        if (event.target.value === 'delete') {
            copyCheckboxes.forEach(checkbox => {
                checkbox.isChecked ? checkbox.display = true : checkbox.display = false;
                console.log(checkbox);
            });
            setCheckboxes(copyCheckboxes);
        } else if (event.target.value === 'reset') {
            copyCheckboxes.forEach(checkbox => {
                checkbox.display = false;
                checkbox.isChecked = false;
            });
            setCheckboxes(copyCheckboxes);
            console.log(checkboxes);
        }
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Button
                    value="delete"
                    handelOnClick={(event) => handelOnClick(event)}
                />

                <Button
                    value="reset"
                    handelOnClick={(event) => handelOnClick(event)}
                />
            </div>

            <ul>
                {checkboxes.map(checkbox => {
                    return (
                        <li key={checkbox.text}
                            style={{ display: checkbox.display ? "none" : "" }}
                        >
                            <input
                                type="checkbox"
                                checked={checkbox.isChecked}
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