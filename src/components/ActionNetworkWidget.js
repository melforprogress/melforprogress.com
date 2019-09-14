import React from 'react'
import Script from 'react-load-script'
import './actionNetwork.sass'

export default class ActionNetworkWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {randomHash: Math.random() * 1000 };
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
      <>
        {/* add random number to script URL cos otherwise the widget won't be inserted if this page is loaded a second time */}
        <Script
          url={`https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash=${this.state.randomHash}`}
          onLoad={this.handleFormLoaded.bind(this)}
        />
        <div id='can-form-area-join-our-campaign-for-progress-2'></div>
      </>
    )
  }
}


