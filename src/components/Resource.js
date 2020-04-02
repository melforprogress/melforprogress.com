import React, { useState, useEffect } from 'react'

const axios = require('axios');

let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vTxA5mfzuOFOGbqCsNJnTCD5GjgAGfyd3sU3X3Lwev9oEb0Asnr0eHIRe8ytTxwqEf9kxH8J8rk1x_B/pub";
let docDiv;
//var parseDoc;
var cleanResult = (data) => {
  console.log("We have data!");
  //console.log(data);
  docDiv = data;
  docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
  docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
  docDiv = docDiv.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
  //console.log("Here is the sliced data:");
  //console.log(docDiv)
  //parseDoc = (new DOMParser().parseFromString(docDiv, "text/html"))
  return docDiv;
}
//var askReload = () => { docDiv = "<div> Please Reload the Page</div> "}

/*axios.get(iframeSRC, { crossdomain: true })
  .then((response) => 
    cleanResult(response.data)
  )
  .catch((response) => 
        askReload()
        );*/




export default function(props) {

  let [docData, setDocData] = useState(0)
  useEffect(() => {
    axios.get(iframeSRC, { crossdomain: true })
    .then((response) => setDocData(cleanResult(response.data)) )
    //.catch((response) => askReload() );
    // get data from GitHub api
    /*fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
      }) // set data for the number of stars*/
  }, [])

  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: docData }} />
    </div>
  )
}
