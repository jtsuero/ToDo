//toDo App
//Jordan Suero

class ToDo {
  constructor() {
    this.list = [];
    this.name = "default";
  }

  getList() {
    return this.list;
  }

  addItem(item) {
    this.list.push(item);
  }
}
//Setting up the list and the form for entries and deletions
document.getElementById("submitbutton").addEventListener("click",addItem);
document.getElementById("deleteBtn").addEventListener("click", findDeleteItem);
let myList = document.createElement("div");
console.log(myList);
myList.setAttribute("id", "myList");
let list1 = new ToDo();

function makeList() {
  list1.name = "jordan"
  console.log(list1.name);
}

function printList(list) {
  let node;
  let newList = document.getElementById("body");
  for(let i= list.length - 1; i < list.length; i++) {
    document.body.appendChild(myList);
    let lineItem = document.createElement("span");
    lineItem.innerHTML = " " +  list[i];
    let newLine = document.createElement("br");
    let checkBox = document.createElement("input");
    checkBox.type =  "checkbox";
    myList.appendChild(checkBox);
    myList.appendChild(lineItem);
    myList.appendChild(newLine);
  }				
}

function addItem() {	
  let newItem = document.getElementById("item").value;
  list1.addItem(newItem);
  printList(list1.getList());
  console.log(list1.getList());
}

//finds item in list to delete
  function findDeleteItem() {
    let currentList = document.getElementById("myList");
    let children = currentList.childNodes;
    for(let i = 0; i < children.length; i++) {
      if(children[i].checked) {
        console.log(i)
        deleteItem(children[i+1])
        console.log(children[i]);
        currentList.removeChild(children[i]);
        currentList.removeChild(children[i]);
        currentList.removeChild(children[i]);
      }
    }
  }

//deletes item from list array
function deleteItem(item) {
  let deleteItem = list1.getList().indexOf(item);
  console.log(list1.getList());
  (list1.getList().splice(deleteItem, 1));	
  //eraseList(deleteItem - 1);
}

