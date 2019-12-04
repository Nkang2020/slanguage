// chrome.storage.local.get(null, function(items) {
//     console.log('Settings retrieved', items);
//     // document.getElementById("word").innerHTML = items;
//   });


  chrome.storage.local.get(null, function(items) {
        
        var allKeys = Object.keys(items);
        var allKeys2 = Object.values(items);
        var nums1 = document.getElementsByClassName("text-1");
        var nums2 = document.getElementsByClassName("text-2");
        for (var j=0;j<allKeys.length;j++){
          
          var x = "<div class='block-out'><div class='block-in-1'><span id='text1' class='text-1'></span></div><div class='block-in-2'><span id='text2' class='text-2'></span></div><div class='svg-div'><svg class='Capa_1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 612 612' style='enable-background:new 0 0 612 612;' xml:space='preserve'><g><g id='_x31__30_'><g><path d='M421.267,173.425c-9.142-5.278-20.847-2.142-26.125,7L272.837,392.272l-68.429-63.112c-7.229-7.707-19.316-8.108-27.024-0.88c-7.707,7.229-8.109,19.316-0.879,27.043l87.439,80.65c7.229,7.707,19.316,8.108,27.023,0.88c2.333-2.181,137.317-237.284,137.317-237.284C433.545,190.409,430.408,178.704,421.267,173.425z M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306s306-136.992,306-306S475.008,0,306,0z M306,573.75C158.125,573.75,38.25,453.875,38.25,306C38.25,158.125,158.125,38.25,306,38.25c147.875,0,267.75,119.875,267.75,267.75C573.75,453.875,453.875,573.75,306,573.75z'/></g></g></g></svg></div></div>"
          var e = document.createElement('div');
          e.innerHTML = x;
          while(e.firstChild) {
              document.body.appendChild(e.firstChild);
          }
          document.getElementsByClassName("svg-div")[j].addEventListener("click", function(e){ 
            var clear = e.path[2].childNodes[0].innerText;
            for (var k=0;k<document.getElementsByClassName("block-out").length;k++){
              if (document.getElementsByClassName("block-out")[k].childNodes[0].innerText == e.path[2].childNodes[0].innerText){
                document.getElementsByClassName("block-out")[k].style.display = "none";
                chrome.storage.local.remove([clear],function(){
                 })
              }
            }
            
           })
        for (var i = 0; i < nums1.length; i++) {
          nums1[i].innerHTML = allKeys[i];
          nums2[i].innerHTML = allKeys2[i];
          console.log(allKeys);

        }
        document.getElementById("text1").innerHTML = allKeys[0];
        document.getElementById("text2").innerHTML = allKeys2[0];
    };
  });



