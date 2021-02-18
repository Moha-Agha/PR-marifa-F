import React, { useState } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const FloatNav = () => {
    const [toTop, setToTop] = useState(false)
    let startPoint = 250
  
    window.onscroll = () => {
      document.body.scrollTop > startPoint || document.documentElement.scrollTop > startPoint ?
        setToTop(true) :
        setToTop(false)
    };
  
    
    return (
      < span className={toTop ? "scroll-buttons " : "scroll-buttons hide"} >
      <Router>
      <Link ><i className='scroll-button material-icons md-24'>account_circle</i></Link>
      <Link ><i className='scroll-button material-icons md-24'>favorite</i></Link>
      <Link ><i className='scroll-button material-icons md-24'>local_grocery_store</i></Link>
      <AnchorLink href="#nav" ><i className='scroll-button material-icons md-36'>expand_less</i> </AnchorLink>
      </Router>
      </span>
    );
}

export default FloatNav