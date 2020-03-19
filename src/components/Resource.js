import React from 'react'

export default function(props) {
  return (
    <div>
    <a className="anchor" id={props.id} />
    <div className="issue">
      {props.paragraphs.map(p => {
        return <p>{p}</p>
      })}
    </div>
    </div>
  )
}
