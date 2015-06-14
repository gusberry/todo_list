var list = [];
var getButton = document.getElementById("btn");
var newList = document.getElementById("now");

getButton.addEventListener("click", addToList);

function addToList(){
    var liElem = document.createElement("li");
    var inputElem = document.createElement("input");
    inputElem.setAttribute("type", "checkbox");
    var text = document.getElementById("text");
    var liText = liElem.appendChild(document.createTextNode(text.value));
    liElem.appendChild(inputElem);
    liElem.appendChild(liText);
    newList.appendChild(liElem);
    list.push(liText);
    liElem.addEventListener("click", delFromList);
    text.value = "";
    text.focus();
}

function delFromList(){
    newList.removeChild(this);
}
