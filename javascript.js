//this is an anonymous function and run without calling 
(function (evt) {
        //Send AJAX call to get the  json data
        var newStickyRequest = new XMLHttpRequest();
        newStickyRequest.open('GET', 'data.json', true);
        newStickyRequest.onload = function (e) {
            if (this.readyState == 4 && this.status == 200) {
              toDoListener(this.responseText);
            }
        };
        newStickyRequest.send();
    })();


function toDoListener(responseText){
  var json=JSON.parse(responseText);
  var htm=document.getElementById("todoItems");
  var div=document.getElementById("divToDoItems");

};
