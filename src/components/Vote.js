import React, { useState, useEffect } from 'react'

const axios = require('axios');

let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vTsqy2X1A4r-hx4nnHYcE8NjLgDbbfBFgEBtKbWf6wfDEFIkloWAuGOAINtF1JOh6COxECbhFMQzJh-/pub";
let docDiv;
var cleanResult = (data) => {
  console.log("We have data!");
  docDiv = data;
  docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
  docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
  docDiv = docDiv.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
 
  return docDiv;
}

export default function(props) {
  console.log("quick debug log")
  let [docData, setDocData] = useState("Loading...")
  useEffect(() => {
    axios.get(iframeSRC, { crossdomain: true })
    .then((response) => setDocData(cleanResult(response.data)) )
 
  }, [])

  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: docData }} />
    </div>
  )
}
