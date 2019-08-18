import React from 'react'

import styles from './PageUnderNavbar.module.css'

export default function(props){
  return <div>
    <div className={styles.pageUnderNavbar}>
      {props.children}
    </div>
  </div>
}
