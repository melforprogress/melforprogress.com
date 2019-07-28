import React from 'react'

import styles from './PageUnderNavbar.module.css'

export default function(props){
  return <div className={styles.pageUnderNavbar}>
    {props.children}
  </div>
}
