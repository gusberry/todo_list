var list = [];
var toDoList = function(name){
    this.name = name;
    this.addToList = function(){
        list.push(this.name);
        console.log(this.name + ' was created successful!');
    };
    this.delFromList = function(){
        delete list[this.name];
        console.log(this.name + ' was deleted successful!');
    };
};

var things = new toDoList(thing);
things.thing = document.getElementById('text').onclick(things.addToList);
