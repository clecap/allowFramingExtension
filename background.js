
var removingSec = false;


chrome.webRequest.onHeadersReceived.addListener(
  function (details) {  
    var filterFunction = (removingSec ?
      function(header)   {return ( (header.name.toLowerCase() !== 'x-frame-options') && (header.name.toLowerCase() !== 'content-security-policy') && (header.name.toLowerCase() !== 'x-content-security-policy') );}
      : function(header) {return true;}
    );
    
    var fresh = details.responseHeaders.filter( filterFunction );
    if (removingSec) {fresh.push ( {name:"Access-Control-Allow-Origin", value:"*"} );} 
    
    return { responseHeaders:  fresh};
  }, {urls: ["<all_urls>"]}, ["blocking", "responseHeaders"]);


/* make projector window always on top */
/* set cors header allowing access from everywhere */

chrome.runtime.onMessage.addListener (function(message, callback) {
  alert ("chrome.runtime got message");
  
});


chrome.browserAction.onClicked.addListener(function(tab) {
  var co = confirm ("Press OK to turn OFF Cross and Frame Protection; CANCEL reactivates normal browser protection");
  if (co) {
    chrome.browserAction.setBadgeBackgroundColor ( {color: "red"} );
    chrome.browserAction.setBadgeText ( {text: "WRN"} );
    alert ("Cross and Frame Protection is now OFF. Click extension icon again to turn on again.");
    removingSec = true;
  }
  else {
    chrome.browserAction.setBadgeBackgroundColor ( {color: "blue"} );
    chrome.browserAction.setBadgeText ( {text: "OK"} );
    alert ("Cross and Frame Protection is now ON again. You are protected.");
    removingSec = false;
  }
  
});


// after change: repeat the "load unpacked" suffices