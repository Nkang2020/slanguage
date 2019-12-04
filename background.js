chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
      chrome.browserAction.setIcon({path: './success-icon.png'})
      setTimeout(function () {
        chrome.browserAction.setIcon({path: './logo-small.png'})
    }, 1000);

      
        sendResponse({farewell: "goodbye"});
    });


    // chrome.browserAction.setIcon({path: 'success-icon.png'})  