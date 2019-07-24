import React from 'react'
import Script from 'react-load-script'
import headshot from '../img/content/supercropped.jpg'
import PageContent from './PageContent'

export default class Billboard extends React.Component {
  constructor(props) {
    super(props);
    // add random number to AN script URL cos otherwise the widget won't be inserted if this page is loaded a second time
    this.state = {uniqueInt: Math.random()};
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
      <div id="billboard">
        <Script
          url={`https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash=${this.state.uniqueInt}`}
          onLoad={this.handleFormLoaded.bind(this)}
        />
        <PageContent>
          <img id="headshot" src={headshot} />
          {this.props.children}
          <div className="content" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{textAlign: 'center'}}>Join Our Campaign for Progress!</h1>
          </div>
          <div id='can-form-area-join-our-campaign-for-progress-2'></div>
        </PageContent>
      </div>
    )
  }
}


