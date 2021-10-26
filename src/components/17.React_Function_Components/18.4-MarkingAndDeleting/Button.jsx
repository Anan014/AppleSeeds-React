import React from 'react';

function Button({value,handelOnClick}) {

    return (
        <div>
            <input
            type="button"
            onClick={handelOnClick}
            value={value}
            />
        </div>
    );
}

export default Button;