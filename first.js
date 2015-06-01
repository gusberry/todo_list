//var list = [];
// var name = prompt("What are you planning?", "");
// var action = prompt("What will you do with it?", "");
var toDo = function(){
    this.name = prompt("What are you planning?", "");
    this.action = prompt("What will you do with it?", "");
    this.list = [];
    this.workList = function(){
        if(this.action == "write"){
            this.list.push(this.name);
            console.log(this.name + ' was created successful!');
        }
        else if(this.action == "del"){
            delete list[this.name];
            console.log(this.name + ' was deleted successful!');
        }
        else{
            console.log("Try again - you can choose one of the option: write or del!");
        }
        console.log(this.list);
    }
}

var things = new toDo();
things.workList();
