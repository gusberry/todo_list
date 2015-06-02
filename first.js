var list = [];
var toDoList = function(name, action){
    this.name = name;
    this.action = action;
    this.addToList = function(this.name){
        list.push(this.name);

        console.log(this.name + ' was created successful!');
    };
    this.delFromList = function(){
        delete list[this.name];
        console.log(this.name + ' was deleted successful!');
    };
};

var things = new toDoList(name, act);
things.name = document.getElementById('text').onclick(things.addToList);
