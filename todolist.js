var list = ["Play Dark Souls The Board Game"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
  	listList();
  } else if(input === "new") {
    newList();
  } else if(input === "delete") {
    deleteList();
  }
  input = prompt("What would you like to do?")
}

console.log("You quit the app, goodbye.")

function listList() {
  console.log("====================")
  list.forEach(function(todo, index) {
    console.log(index + ": " + todo);
  });
  console.log("====================")
}

function newList() {
  var newList = prompt("Enter your todo here.");
  list.push(newList);
}

function deleteList() {
  var index = prompt("Which todo number would you like to delete?");
  list.splice(index, 1);
}