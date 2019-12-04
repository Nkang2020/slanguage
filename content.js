var listSlang = {
    'basic':'something (or someone) extremely mainstream',
    'lit':"something that is awesome",
    'dood':"dude",
    'poggers':"wow  ",
    'clap back':"responding to criticism",
    'ghost':"cut off all communication with someone you're no longer interested in",
    'mood':"use mood in lieu of saying same.",
    'salty':"feeling salty is akin to feeling upset or angry — usually over something minor",
    'shade':"to make fun of something or someone",
    'shook':"shocked, surprised, or startled",
    'slay':"to kill something — in a good way. Aced a test? You slayed it",
    'tea':"gossip",
    'af':"emphasis",
    'bae':"babe",
    'bye felicia':"to wave goodbye to someone or something unimportant",
    'goat':"greatest of all time",
    'high key':"anything you're saying loud and proud",
    'low key':"on the down low",
    'stan':"a fan",
    'turnt':"a state of general excitement or craziness",
    'woke':"knowledgeable, sympathetic, and aware",
    'yass':"yes!"
}
// chrome.browserAction.setBadgeText ( { text: "loading" } );
// chrome.browserAction.setIcon({path: 'success-icon.png'})

  
var newList = {};

var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            text = text.toLowerCase();
            text = text.split(" ");
            for (k = 0; k < text.length ; k++){
                if (text[k] in listSlang ){
                    if (!(text[k] in newList)) {
                        newList[text[k]] = listSlang[text[k]];
                        chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
                            console.log(response.farewell);
                          });
                    }
                    
                }
            }
        }
    }
}

chrome.storage.local.set(newList, function() {
  });

//   chrome.storage.local.get(null, function(items) {
//     var allKeys = Object.keys(items);
//     var allKeys2 = Object.values(items);
// });

// window.addEventListener('keyup',function(e){
//     console.log(e);
//     if (e.keyCode == 13){
//     for (var i = 0; i < elements.length; i++) {
//         var element = elements[i];
        
//         for (var j = 0; j < element.childNodes.length; j++) {
//             var node = element.childNodes[j];
            
//             if (node.nodeType === 3) {
                
//                 var text = node.nodeValue;
//                 text = text.toLowerCase();
//                 text = text.split(" ");
//                 for (k = 0; k < text.length ; k++){
                    
//                     if (text[k] in listSlang ){
//                         if (!(text[k] in newList)) {
                            
//                             newList[text[k]] = listSlang[text[k]];
//                             console.log(text[k])
//                             alert("his");
//                         }
                        
//                     }
//                 }
//             }
//         }
//     }
// }
// });
