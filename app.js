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
//list1.addItem(item1);
let textArea = document.getElementById('body');
//textArea.innerText = "fucker";
function printList(list) {
	for (let i = 0; i < list.length; i++) {
	textArea.innerText = list[i];
	} 
}
console.log("butts");
printList(list1.getList());
