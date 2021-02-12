import React from 'react'
import LogoSvg from './logo.svg'

const Logo = () => {
    return (<span className='logo-contener'>
    <img className='logo' src={LogoSvg} alt="marifa.de Logo" />
    <span className='slogan'>متجر معرفة للكتب العربية</span>
    </span>)
}

export default Logo
