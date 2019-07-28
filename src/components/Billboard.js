import React from 'react'
import headshot from '../img/content/supercropped.jpg'
import PageUnderNavbar from './PageUnderNavBar'

import styles from './Billboard.module.css'
import ActionNetworkWidget from './ActionNetworkWidget';

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


