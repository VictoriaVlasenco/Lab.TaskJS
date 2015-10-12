
var table = document.createElement('table');
table.setAttribute('border','1px');
table.setAttribute('width','100%');
table.setAttribute('id','table');

for (i=0; i< 9; i++){
  var row = table.insertRow();
  for(j=0; j<9; j++){
    var text = document.createTextNode(String.fromCharCode(j));
    var cell = row.insertCell(j-1);
    cell.setAttribute('align','center');
    cell.appendChild(text);
  }
}
document.getElementById("output").appendChild(table);

var input = document.getElementById('table');

var handler = function(event) {
  if (event.target.style.backgroundColor == "yellow")
    event.target.style.backgroundColor = "lightskyblue";
  else
    event.target.style.backgroundColor = "yellow";
};

input.addEventListener( "click" , handler, true); 
