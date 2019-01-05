//toDo App
//Jordan Suero

class ToDo {
		constructor() {
				this.list = ["butts", "booty"];
		}

		

		getList() {
				return this.list;
		}

		addItem(item) {
				this.list.push(item);
		}

		removeItem() {

		}
}
let list1 = new ToDo();
let item1 = prompt("Enter your first item");
list1.addItem(item1);
let textArea = document.getElementById('body');

function printList(list) {
	let newItem = document.createElement("li");
	let node;
	let newList = document.getElementById("body");	
	for (let i = 0; i < list.length; i++) {
		node = document.createTextNode(list[i]);
		newItem.appendChild(node);
		newList.insertBefore(newItem,null);
	} 
}

printList(list1.getList());
