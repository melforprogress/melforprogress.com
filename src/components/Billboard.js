import React from 'react'
import headshot from '../img/content/supercropped.jpg'
import PageUnderNavbar from './PageUnderNavBar'

import styles from './Billboard.module.css'
import ActionNetworkWidget from './ActionNetworkWidget';

// TODO:
// This component is called "Billboard"
// but it's actually the entire "Home" page
// and should be renamed accordingly when we have a chance
// (i.e., when there won't be merge conflicts.)
export default function ({children}) {
  return (
    <div className={styles.billboard}>
      <PageUnderNavbar>
        <img id="headshot" src={headshot} />
        {children}
        <div className={styles.actionNetworkSection}>
          <div style={{textAlign: 'center'}} className="title">Join Our Campaign for Progress!</div>
          <ActionNetworkWidget />
        </div>
      </PageUnderNavbar>
    </div>
  )
}


