# Background

Many webservers send various headers to prevent the browser from

* Making cross site requests
* Placing the web page into an iframe 

For a number of applications this is inconvenient. For example you might want to develop an elearning tool and inside of an iframe you want to show a web page
from a site which disallows iframing. :-( However, disabling these two features for an extended period of time damages browser security.

This extension allows to turn off cross site and framing protection for a short period of time and documents the status as a badge in the extension icon.

# Installation

The extension has no chrome webstore URL and thus must be installed manually.

* Open the chrome Extension Management page by navigating to chrome://extensions or clicking Chrome menu->More Tools->Extensions.
* Enable Developer Mode by clicking the toggle switch next to Developer mode.
* Click the LOAD UNPACKED button and select the directory where this extension is stored.

# Usage

Pretty much self-explanatory. Click on the icon (Letter "S" on grey background with blue badge which should read "OK" or red badge which should "WRN") and follow the instructions
of the message windows.

# FAQs
* Isn't this dangerous?

Yes, it is. Make sure you have not turned protection off while surfing security sensitive sites. For legal reasons I add: Use and install at your own risc. The code is provided for instructional and educational purposes only.