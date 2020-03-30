import React from 'react'

let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vTxA5mfzuOFOGbqCsNJnTCD5GjgAGfyd3sU3X3Lwev9oEb0Asnr0eHIRe8ytTxwqEf9kxH8J8rk1x_B/pub";

// create div and replace iframe
var docDiv;
// CORS request
var xhr = new XMLHttpRequest();
xhr.open('GET', iframeSRC, true);
xhr.onload = function() {
    // display response
   docDiv = xhr.responseText;
   docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
   docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
};
xhr.send();

export default function(props) {
  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: docDiv }} />
    </div>
  )
}
