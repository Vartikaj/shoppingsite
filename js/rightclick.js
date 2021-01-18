window.addEventListener('contextmenu', function (e) {
  alert('Right-click is disabled');
  e.preventDefault();
}, false);

// $(document).bind("contextmenu",function(e) {
//  e.preventDefault();
// });
// $(document).keydown(function(e){
//     if(e.which === 123){
//        return false;
//     }
// });
