import React from 'react'
import Script from 'react-load-script'
import headshot from '../img/content/supercropped.jpg'
import PageContent from './PageContent'

import styles from './Billboard.module.css'

export default class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hashActionNetwork: Math.random() * 1000 };
  }

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
        {/* add random number to script URL cos otherwise the widget won't be inserted if this page is loaded a second time */}
        <Script
          url={`https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash=${this.state.hashActionNetwork}`}
          onLoad={this.handleFormLoaded.bind(this)}
        />
        <PageContent>
          <img id="headshot" src={headshot} />
          {this.props.children}
          <div className={styles.actionNetworkSection}>
            <div style={{textAlign: 'center'}} className="title">Join Our Campaign for Progress!</div>
          </div>
          <div id='can-form-area-join-our-campaign-for-progress-2'></div>
        </PageContent>
      </div>
    )
  }
}


