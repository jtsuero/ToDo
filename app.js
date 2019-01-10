//toDo App
//Jordan Suero

class ToDo {
		constructor() {
				this.list = ["yo", "wassup", "hello"];
		}


		getList() {
				return this.list;
		}

		addItem(item) {
				this.list.push(item);
		}

		removeItem() {
				//how to delete a particular task, that may not be the first in array
		}
}
let list1 = new ToDo();
document.getElementById("submitbutton").addEventListener("click",addItem);
document.getElementById("deleteBtn").addEventListener("click", deleteItem);
let x = document.createElement("OL");
x.setAttribute("id", "myList");
console.log(list1.getList());

function printList(list, action) {
		let node;
		let newList = document.getElementById("body");
		let starting = null;
		if (action === "adding") {
			starting = list.length - 1;
		} else {
			starting = 0;
		}
				for(let i= starting; i < list.length; i++) {
						document.body.appendChild(x);
						let newItem = document.createElement("li");
						node = document.createTextNode(list[i]);
						newItem.appendChild(node);
						x.insertBefore(newItem,null);
				}				
}
function addItem() {	
		let newItem = document.getElementById("item").value;
		list1.addItem(newItem);

		printList(list1.getList(), "adding");
		console.log(list1.getList());
}

function deleteItem() {
		let deleteItem = document.getElementById("delete").value;
		console.log(list1.getList());
		console.log(deleteItem);
		list1.getList().splice(deleteItem- 1, 1);		
		console.log(list1.getList());
		printList(list1.getList(), "deleting");

}
