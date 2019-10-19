import React from 'react'

export default function(props) {
  return (
    <div className="issue" id={props.id}>
       <img className="issue-bug" src={props.bugurl} aria-label={props.title} />
      {props.paragraphs.map(p => {
        return <p>{p}</p>
      })}
    </div>
  )
}
