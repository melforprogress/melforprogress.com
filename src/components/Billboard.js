import React from 'react'
import headshot from '../img/content/supercropped.jpg'
import PageUnderNavbar from './PageUnderNavBar'

import styles from './Billboard.module.css'
import ActionNetworkWidget from './ActionNetworkWidget';

export default class Billboard extends React.Component {
  handleFormLoaded(){
    setTimeout(
      () => {
        document.querySelector("#can-form-area-join-our-campaign-for-progress-2").classList.add("loaded")
      },
      100
    );
  }
  render(){
    return (
      <div className={styles.billboard}>
        <PageUnderNavbar>
          <img id="headshot" src={headshot} />
          {this.props.children}
          <div className={styles.actionNetworkSection}>
            <div style={{textAlign: 'center'}} className="title">Join Our Campaign for Progress!</div>
          </div>
          <ActionNetworkWidget />
        </PageUnderNavbar>
      </div>
    )
  }
}


