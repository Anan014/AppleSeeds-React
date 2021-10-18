import React from 'react'

const Links = ({link,type}) => {
    return (
        <div>
            <a href={`${link}`} target="_blank" rel="noopener noreferrer">{type}</a>
        </div>
    )
}

export default Links
