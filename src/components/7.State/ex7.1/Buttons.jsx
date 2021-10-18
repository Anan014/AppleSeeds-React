import React from 'react'

const Buttons = ({onClick,value}) => {
    return (
        <div>
            <input onClick={onClick} type="button" value={value}/>
        </div>
    )
}

export default Buttons
