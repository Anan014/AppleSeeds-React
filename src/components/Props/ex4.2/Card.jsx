import React from 'react'
import Image from './Image'
import Title from './Title'
import Description from './Description'
import Links from './Links'

const Card = ({
    title,
    imageUrl,
    description,
    link1,
    link2,
}) => {
    return (
        <div className="card">
            <Image imageUrl={imageUrl} />

            <div className="cardContainer">
                <Title title={`${title}`} />
                <Description description={`${description}`} />
                <div className="links">
                <Links link={`${link1}`} type={`SHARE`} />
                <Links link={`${link2}`} type={`EXPLORE`} />
                </div>
            </div>
        </div>
    )
}

export default Card
