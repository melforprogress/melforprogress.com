import React from 'react'

const axios = require('axios');

let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vTxA5mfzuOFOGbqCsNJnTCD5GjgAGfyd3sU3X3Lwev9oEb0Asnr0eHIRe8ytTxwqEf9kxH8J8rk1x_B/pub";
var docDiv;
var cleanResult = (data) => {
  console.log("We have data!");
  console.log(data);
  docDiv = data;
  docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
  docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
  console.log("Here is the sliced data:");
  console.log(docDiv)

}
var askReload = () => { docDiv = "<div> Please Reload the Page</div> "}

axios.get(iframeSRC, { crossdomain: true })
  .then((response) => 
    cleanResult(response.data)
  )
  .catch((response) => 
        askReload()
        );



export default function(props) {
  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: docDiv }} />
    </div>
  )
}
