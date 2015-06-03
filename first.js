var toDoList = function(name){
    this.name = name;
    this.func = function(){
        document.getElementById("text").innerHTML = "<li>"+this.name+"</li>>";
    };
    this.addToList = function(){
        document.getElementById('text').addEventListener("click", this.func());
    };
    this.delFromList = function(){
        document.getElementsByTagName("li").removeEventListener('click', this.func());
    };
};

var things = new toDoList();
things.addToList();
