import React from 'react'
import desktop_logo from '../img/content/mel-logo-web-desktop.png'

export default function(props) {
  return (
    <div className="issue">
      <h3>{props.title}</h3>
       <img className="desktop" src={desktop_logo} />
      {props.paragraphs.map(p => {
        return <p>{p}</p>
      })}
    </div>
  )
}
