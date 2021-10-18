import React from 'react'

const Image = ({imageUrl}) => {
    return (
        <div
            className='img'
            style={{ backgroundImage: `url(${imageUrl})`
            }}>

        </div>
    )
}

export default Image
