import React from 'react'

export default function(props) {
  return (
    <div className="issue">
      <h3>{props.title}</h3>
      {props.paragraphs.map(p => {
        return <p>{p}</p>
      })}
    </div>
  )
}
