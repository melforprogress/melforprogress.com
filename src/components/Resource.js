import React from 'react'

//
//let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vTxA5mfzuOFOGbqCsNJnTCD5GjgAGfyd3sU3X3Lwev9oEb0Asnr0eHIRe8ytTxwqEf9kxH8J8rk1x_B/pub";
var docDiv = "<div>Test</div>";
/*var parseDoc;
var cleanResult = (data) => {
  console.log("We have data!");
  console.log(data);
  docDiv = data;
  docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
  docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
  docDiv = docDiv.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
  console.log("Here is the sliced data:");
  console.log(docDiv);
  docDiv = "<div>Test</div>"
  //parseDoc = (new DOMParser().parseFromString(docDiv, "text/html"));
  //parseDoc = '<p className={test}>Test</p>';

}
var askReload = () => { docDiv = "<div> Please Reload the Page</div> "}

axios.get(iframeSRC, { crossdomain: true })
  .then((response) => 
    cleanResult(response.data)
  )
  .catch((response) => 
        askReload()
        );*/



export default function(props) {
  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: docDiv }} />
    </div>
  )
}
