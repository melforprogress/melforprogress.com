import React from 'react'
import headshotMobile from '../img/content/Hero-mobile-spring.jpg'
import headshotTablet from '../img/content/Hero-desktop_tablet-spring.jpg'
import PageUnderNavbar from './PageUnderNavBar'
import styles from './Billboard.module.css'
import ActionNetworkWidget from './ActionNetworkWidget'
import ResponsiveImage from './ResponsiveImage'

// TODO:
// This component is called "Billboard"
// but it's actually the entire "Home" page
// and should be renamed accordingly when we have a chance
// (i.e., when there won't be merge conflicts.)
export default function({ children }) {
  return (
    <div className={styles.billboard}>
      <PageUnderNavbar>
        <ResponsiveImage
          id="headshot"
          className={styles.heroImage}
          src={headshotMobile}
          sizeSrcMap={{ tablet: headshotTablet }}
        />
        {children}
      </PageUnderNavbar>
    </div>
  )
}
