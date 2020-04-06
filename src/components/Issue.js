import React from 'react'

function IssueList(props) {
  return <ul> {props.paragraphs.map(p => {
    let line = p.props.defaultMessage;
    let dashIndex = line.indexOf(':');
    console.log(dashIndex);
    if(dashIndex > 0) {
      let subLine = line.substring(0,dashIndex+1);
      let restOfLine = line.substring(dashIndex+1,line.length);
      
      return <li className="issue-list-item"><span className="issue-list-span">{subLine}</span>{restOfLine}</li>
    }
    else {
      return <li>{p}</li>
    }
  }) }</ul>
}


function IssueParagraph(props) {
  console.log(props)
  return props.paragraphs.map(p => {
    return <p>{p}</p>
  })
  
}


export default function(props) {
  return (
  	<div>
  	<a className="anchor" id={props.id} />
    <div className="issue">
       <img className="issue-bug" src={props.bugurl} aria-label={props.title} alt={props.title} />
      {props.type == "list"
       ? <IssueList type={props.type} paragraphs={props.paragraphs} />
       : <IssueParagraph type={props.type} paragraphs={props.paragraphs}/>
      }

    </div>
    </div>
  )
}
