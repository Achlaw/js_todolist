var list = ["Play Dark Souls The Board Game"];

var input = prompt("Add your todo by typing here.")

if(input === "list") {
  console.log(list);
} else if(input === "new") {
  var newList = prompt("Add another todo?");

  list.push(newList);
}