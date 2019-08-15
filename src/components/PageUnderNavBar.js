import React from 'react'

import styles from './PageUnderNavbar.module.css'

export default function(props){
  return <div>
    <div className={styles.pageUnderNavbarDesktop}>
      {props.children}
    </div>
    <div className={styles.pageUnderNavbarMobile}>
      {props.children}
    </div>
  </div>

}
