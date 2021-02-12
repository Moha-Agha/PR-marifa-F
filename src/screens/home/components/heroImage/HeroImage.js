import React from 'react';
import Quote from '../quote/Quote';
import Search from '../search/Search'

const HeroImage = () => {
    return (
        <div className='hero_container'>
            <Quote/>
            <Search/>
            <div className='hero_image'/>
        </div>
    )
}

export default HeroImage
