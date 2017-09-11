var list = ["Play Dark Souls The Board Game"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
  	console.log("====================")
    list.forEach(function(todo, index) {
      console.log(index + ": " + todo);
    });
  	console.log("====================")
  } else if(input === "new") {
    var newList = prompt("Enter your todo here.");
    list.push(newList);
  }
  input = prompt("What would you like to do?")
}

console.log("You quit the app, goodbye.")
