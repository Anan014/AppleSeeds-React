import React from 'react'
import Card from './Card'
import './style.css'

const Index4D2 = () => {
    return (
        <div className="allCards">
            <Card
            title='Lama Monachile'
            imageUrl='https://images.unsplash.com/photo-1634469491328-bb246ee7baca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
            description='Lama Monachile beach is in the 13th place out of 44 beaches in the Bari region. It is a small bay with crystal blue water and light pebble.'
            link1='https://goo.gl/maps/hbq8Wwo5WAfYzjWc8'
            link2='https://www.tripadvisor.com/Attraction_Review-g635875-d10365350-Reviews-Lama_Monachile-Polignano_a_Mare_Province_of_Bari_Puglia.html'
            />

            <Card
            title='Golden Gate Bridge'
            imageUrl='https://images.unsplash.com/photo-1634402795073-b491388bf6ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80'
            description='The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.'
            link1='https://goo.gl/maps/qsE5AiasRTqj8hyY8'
            link2='https://www.tripadvisor.com/Attraction_Review-g60713-d104675-Reviews-Golden_Gate_Bridge-San_Francisco_California.html'
            />

            <Card
            title='Horseshoe Bend'
            imageUrl='https://images.unsplash.com/photo-1634364080677-4e4995f68818?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80'
            description='Horseshoe Bend is a horseshoe-shaped incised meander of the Colorado River located near the town of Page, Arizona, United States.'
            link1='https://goo.gl/maps/MYYBsMewtXEDiZLv6'
            link2='https://www.tripadvisor.com/Attraction_Review-g60834-d621712-Reviews-Horseshoe_Bend-Page_Arizona.html'
            />
        </div>
    )
}

export default Index4D2
