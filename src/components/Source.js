import React, { useState, useEffect } from 'react'

const axios = require('axios');

let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vQLUZ84_p_G0wsrOq1M-g22LBAU78jnnq9qWhK5DlLt7OsT1zsbotBTTc9odKXs7hwy7Zj4TIPG-dP4/pub";
let docDiv;
var cleanResult = (data) => {
  docDiv = data;
  docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
  docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
  docDiv = docDiv.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
 
  return docDiv;
}

export default function(props) {
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
