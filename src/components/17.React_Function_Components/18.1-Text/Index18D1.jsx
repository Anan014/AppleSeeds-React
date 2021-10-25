import React, { useState } from 'react';

function Index18D1() {
    const [text, setText] = useState('hello sajkdj jsdnfj sdjf jsdf jsd fjksdf kjsd fkj sdf');
    const [maxLength, setMaxLength] = useState(10);

    function show() {
        if (text.length == maxLength) {
            setMaxLength(10);
        } else {
            setMaxLength(text.length);
        }
    }

    return (
        <div>
            {text.substring(0, maxLength)}
            <a onClick={show} style={{ color: 'red' }}> Click</a>
        </div>
    );
}

export default Index18D1;