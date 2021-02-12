import React from 'react';
import {NAV_LOCA} from '../../localization/ar/Language';

import Logo from '../logo/Logo';

const Nav = () => {
    return (
        <nav>
            <div className='head-nav'>
                <span className='container'>
                    <div className='head-nav_shop-info'>
                        <li><i className="material-icons md-18">done</i>{NAV_LOCA.originalCopy}</li>
                        <li><i className="material-icons md-18">done</i>{NAV_LOCA.SecurePayment}</li>
                        <li><i className="material-icons md-18">done</i>{NAV_LOCA.fastDelivery}</li>
                    </div>
                    <div className='head-nav_contact-us'>  
                        <li>{NAV_LOCA.youtube}<i className="material-icons md-18">play_circle</i></li>
                        <li>{NAV_LOCA.facebook}<i className="material-icons md-18">facebook</i></li>
                        <li>{NAV_LOCA.callUs}<i className="material-icons md-18">headset_mic</i></li> 
                    </div>
               </span>
            </div>

            <div className='body-nav container'>
            <div className='body-nav_shopping-nav-items'>
                <li>{NAV_LOCA.myAccount}<i className="material-icons md-24">account_circle</i></li>
                <li>{NAV_LOCA.myFavourite}<i className="material-icons md-24">favorite_border</i></li>
                <li>{NAV_LOCA.myCart}<i className="material-icons md-24">local_grocery_store</i></li> 
                <li>{NAV_LOCA.german}<i className="material-icons md-24">language</i></li> 
            </div>
            <div className='body-nav_logo'><Logo/></div>
            <div className='body-nav_normal-nav-items'>
                <li>{NAV_LOCA.search}<i className="material-icons md-24">search</i></li>
                <li>{NAV_LOCA.Offers}<i className="material-icons md-24">sell</i></li>
                <li>{NAV_LOCA.sections}<i className="material-icons md-24">storage</i></li> 
            </div>
            </div>
        </nav>
    )
}

export default Nav
