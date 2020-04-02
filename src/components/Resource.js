import React from 'react'

const axios = require('axios');

let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vTxA5mfzuOFOGbqCsNJnTCD5GjgAGfyd3sU3X3Lwev9oEb0Asnr0eHIRe8ytTxwqEf9kxH8J8rk1x_B/pub";
var docDiv;
//var parseDoc;
var cleanResult = (data) => {
  console.log("We have data!");
  docDiv = data;
  docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
  docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
  docDiv = docDiv.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");

  //parseDoc = (new DOMParser().parseFromString(docDiv, "text/html"));

  return docDiv;
}
var askReload = function() {
  console.log("nope");
}

function callDoc(resolve) {
  var passAlong;
  console.log('calling doc');
  axios.get(iframeSRC, {crossdomain: true})
        .then(function(response) {
          passAlong = cleanResult(response.data)
          console.log('pass along assigned');
        })
        .then(function() { 
          console.log("resolving");
          resolve(passAlong) 
        })
}

function getGoogleDoc() {

  return new Promise(function(resolve, reject) {
    console.log("promise started");
    callDoc(resolve);

  });

}

const Resource = async function() {
  console.log("starting");
  const resources = await getGoogleDoc();
  console.log("final");
  console.log(resources);
  return (
    <div>
         <div dangerouslySetInnerHTML={{ __html: docDiv }} />
    </div>
  )
}


export default Resource
