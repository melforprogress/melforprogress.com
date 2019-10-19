import React from 'react'

export default function(props) {
  return (
  	<div>
  	<a className="anchor" id={props.id} />
    <div className="issue">
       <img className="issue-bug" src={props.bugurl} aria-label={props.title} />
      {props.paragraphs.map(p => {
        return <p>{p}</p>
      })}
    </div>
    </div>
  )
}
